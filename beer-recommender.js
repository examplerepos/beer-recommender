if (Meteor.isClient) {
    Template.body.helpers({
        //beers: BeerFactors
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
