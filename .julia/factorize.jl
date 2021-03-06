using Mongo

import NMF

# k = 11 //semi-decent categories
k = 6
t = 1.0e-4

println("Loading ",ARGS[1])
data = readcsv(ARGS[1]);

beer_ids = sort([n for n in Set(data[:,1])])
user_ids = sort([n for n in Set(data[:,2])])

user_length = length(user_ids)
beer_length = length(beer_ids)
total = size(data,1)
println("Unique users: $user_length")
println("Unique beers: $beer_length")
println("Total reviews: $total")

println("Building $user_length x $beer_length matrix...")

M = zeros(length(user_ids),length(beer_ids))
for i = 1:size(data,1)
    beer_idx = findin(beer_ids, data[i,1])[1]
    user_idx = findin(user_ids, data[i,2])[1]
    M[user_idx,beer_idx] = convert(Float64,data[i,3]/5.0)
end

m = 2

println("Factorizing matrix (k=$k, m=$m, t=$t)")
result = NMF.nnmf(M, k, alg=:multmse, maxiter=m, tol=t)
while (!result.converged)
    m *= 2;
    println("Factorizing matrix (k=$k, m=$m, t=$t)")
    result = NMF.nnmf(M, k, alg=:multmse, maxiter=m, tol=t)
end

println("Matrix factorized!")

println("Removing old beer factors...")

client = MongoClient("localhost", 3001)
beer_factors = MongoCollection(client, "meteor", "beer_factors")
delete(beer_factors, Dict())

println("Adding beer factors...")
for c = 1:size(result.H, 2)
    beer_id = beer_ids[c]
    factors = Dict[]
    total_strength = 0
    for r = 1:size(result.H, 1)
        factor_id = r
        strength = result.H[r,c]
        total_strength += strength
        push!(factors, [
            "factor_id" => factor_id,
            "strength" => strength
        ])
    end
    insert(beer_factors, {
        "beer_id" => beer_id,
        "total_strength" => total_strength,
        "factors" => factors
    })
end

println("Beer factors added!")

println("Removing old factors...")

factors = MongoCollection(client, "meteor", "factors")
delete(factors, Dict())

for i = 1:size(result.H, 1)
    insert(factors, {
        "factor_id" => i
    })
end

println("Done!")

# W = ^Factors x >Beers
# H = ^Users x >Factors
#
# W -> beer_factors{
#     beer_id,
#     factor_id,
#     strength
# }
#
# beers {
#     beer_id,
#     name,
#     url
# }
#
# factors {
#     factor_id,
#     name,
#     description
# }