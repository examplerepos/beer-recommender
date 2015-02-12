BeerFactors = new Meteor.Collection('beer_factors');
Factors = new Meteor.Collection('factors');

//TODO: Don't do this...
var beerMap = {118692:"\"The Tiger Cub\" Saison Aged In White Wine Barrels W/ Sour Cherries",129674:"18th Anniversary IPA",113161:"2 Hop (Calypso And Eldorado)",124686:"Another IPA?",92:"Arrogant Bastard Ale",67239:"Arrogant Bastard Ale - Double Dry Hopped",151552:"Arrogant Bastard Ale - Mexican Coffee And Cocoa",93914:"Arrogant Bastard Ale With Chipotle Peppers",116468:"Arrogant Bastard Dry Hopped With Citra",70910:"Baird / Ishii / Stone Japanese Green Tea IPA",124411:"Bang Bang",122666:"Bastard In The Rye",153585:"Bastardized Bastard",116226:"Big Noize IPA",142974:"Bourbon Barrel-Aged Arrogant Bastard Ale",97851:"Burton Snatch",142714:"Cali-Belgique - Coriander, Blood Orange Peel & Cinnamon",130355:"Cali-Belgique Aged In Red Wine Barrels",112976:"Cali-belgique IPA W/ Black Lime & Sorachi Ace Hops",91084:"Cali-Belgique With Centennial Hops",144404:"Cali-Belgique With Dried Blueberries & Pistachios",94920:"Cali-Belgique With Sour Cherries",113634:"Calypso's \"El Dorado\"",155894:"Chai-Spiced Imperial Russian Stout",122908:"Cherrywood-Smoked Saison",128500:"Chris Banker / Insurgente / Stone Xocoveza Mocha Stout",99145:"Cimmerian Portal",146605:"Cimmerian Portal W/ Modern Times Black House Roasted Coffee Beans",97562:"Commander In The Crosshairs",65997:"Crime",154253:"Do These Hops Make My Beer Look Big? IPA",1056:"Double Bastard Ale",132469:"Double Bastard Ale - Brandy Barrel Aged",65452:"Double Bastard Ale - Chipotle Peppers",105808:"Double Bastard Ale - Red Wine Barrel Aged",124552:"Double Dry Hopped Stone Ruination IPA W/ Oak",144411:"Gallagher's After Dinner Stout With Cherries & Cinnamon Sticks",144407:"Gallagher's After Dinner Stout With Peanut Butter, Blackberry & Raspberry",142716:"Go To IPA - Apple Mint, Lemon Thyme & Watermelon",144412:"Go To IPA With Fresh Wasabi, Cucumber & Pickled Ginger",144410:"Go To IPA With Toasted Coconut, Pineapple & Vanilla",144408:"Go To IPA With Vanilla & Cloudberries",112917:"Going Red",150264:"Gratitude IPA",99147:"Great Bowman's Beard",52752:"Imperial Russian Stout - Bourbon Barrel Aged",94919:"Imperial Russian Stout - Templeton Rye Whiskey Barrel Aged",124297:"IPA Dry Hopped (Amarillo) Cask",133123:"IPA With Orange Peel, Mosaic And Citra Hops On Cask",150675:"Just Because IPA",117056:"Kyle Hollingsworth / Keri Kelli / Stone Collective Distortion IPA",6301:"Levitation Ale",114641:"Levitation Ale With Green Tea Leaves",146594:"Levitation Ale With Hibiscus",133125:"Levitation With Centennial Hops",144406:"Levitation With Darjeeling & Ginger",144405:"Levitation With Fresh Orange Peel, Cinnamon Sticks, Clove & Spruce Tips",105102:"Liberty Station Ashy Stache",116459:"Liberty Station Bear Tales From Polaria",154894:"Liberty Station Great Bowman's Beard Aged In Bourbon Barrels",101276:"Liberty Station IPA",148033:"Liberty Station Mättzen",116460:"Liberty Station Wee Erky",127648:"Lord Jeezy XIII",62645:"Lukcy Basartd Ale",117149:"Matt's Burning Rosids W/ Sour Cherries & Apple Blossoms",116458:"Mikhail's Odd",119940:"Mix Tape Vol. 9 - Goats In The VIP Room Blend!",8951:"Oaked Arrogant Bastard Ale",45840:"Oaked Double Bastard Ale",78551:"Old Guardian Barley Wine Style Ale",44155:"Old Guardian Barley Wine Style Ale - Bourbon Barrel Aged",151769:"Old Guardian Barley Wine Style Ale - Extra Hoppy",48762:"Old Guardian Barley Wine Style Ale - Red Wine Barrel Aged",99737:"Old Guardian Barley Wine Style Ale - White Wine Barrel Aged",66036:"Old Guardian BELGO Barleywine",121636:"Pale Ale With Coffee, Vanilla Bean And Candied Walnuts On Cask",144401:"Pale Ale With Sweet Potatoes, Cinnamon, Nutmeg & Vanilla",144413:"Pale Ale With Sweet Potatoes, Maple & Pecans",129146:"Passion Project",132733:"Pilot Batch #001 W/ Sour Cherries",117174:"Pizza Port / Saint Archer / Stone Unite Pale Ale",65998:"Punishment",127650:"Ritual",126181:"Ron Pattinson/ChuckAlek/Stone Liberty Station Colonel Sykes East India Port",142715:"Ruination - African Cucumber, Tangelo & Lime",113049:"Ruination IPA W/ White Sage, Szechuan Peppercorn",125473:"Ruination With Blonde Roasted Coffee Beans",124825:"Ruination With Cherries And American Oak",116034:"Ruination With Chipotle Peppers",144402:"Ruination With Cold-Smoked Centennial Hops, Lemon Peel, Ginger & Honey",58048:"Saison Du BUFF",12973:"Sawyer's Triple",90:"Smoked Porter",36707:"Smoked Porter - Chipotle",38446:"Smoked Porter - Vanilla Bean",131280:"Smoked Porter With Chocolate & Orange Peel",116707:"Smoked Porter With Congo Coffee And Orange Peel",121635:"Smoked Porter With Rice Milk, Lactose, Vanilla & Cinnamon On Cask",150175:"Smoked Porter With Vanilla, Cinnamon & Milk Sugar",145231:"Southern Charred (2014)",113189:"Spotlight Series - Imperial Lavender Berliner Weiss (Team Unicorn)",143802:"Spotlight Series - Team Filly Whisperers Sour Saison Blush Wine Barrel",116131:"Spotlight Series: Imperial Brown With Cinnamon Sticks And Coconut",119816:"Spotlight Series: Livin' Large- Bourbon Barrel Aged W/Cherries And Plums",118447:"Spotlight Series: Spröcketbier",117585:"Spotlight Team Jerry: Blood Stone Brown Barley Wine With Cherry Wood",117579:"Spotlight Team Storm Brain: Oatmeal Porter Aged In Bourbon Barrels",137415:"Stochasticity Project - Hibiscusity",146166:"Stochasticity Project - Master Of Disguise Imperial Golden Stout",123498:"Stochasticity Project - Quadrotriticale",114869:"Stochasticity Project - Varna Necropolis",98387:"Stochasticity Project Grapefruit Slam IPA",137578:"Stochasticity Project: Hibiscusicity",122703:"Stone / Beachwood / Heretic - Unapologetic IPA",127649:"Stone Arbalest",43905:"Stone Cali-Belgique",125643:"Stone Citracado Pale Ale V.2",124424:"Stone Coffee Milk Stout",133870:"Stone Coffee Milk Stout W/ Vanilla & Toasted Macadamia Nuts",109789:"Stone Delicious IPA",139129:"Stone Enjoy After",84596:"Stone Enjoy By IPA",141758:"Stone Farms Fresh Hop Ale",113443:"Stone Farms Lavender Pale Ale",111969:"Stone Go To IPA",116227:"Stone Go To IPA W/ Amarillo Hops",139073:"Stone Go To IPA W/ Lemon And Vanilla Beans",141299:"Stone Go To IPA W/Habanero, Jalapeno, Pineapple",95045:"Stone Hoppy Brownie Hemp Ale",1160:"Stone Imperial Russian Stout",155892:"Stone Imperial Russian Stout - Chai",142195:"Stone Imperial Russian Stout Aged In Red Wine Barrels",34436:"Stone IPA (Double Dry Hopped)",88:"Stone IPA (India Pale Ale)",141356:"Stone IPA - Double Dry-Hopped With Motueka",141355:"Stone IPA - Dry-Hopped With Citra",142718:"Stone IPA - Raspberries, Jasmine Tea, Limes, Serrano Chile & Mango",132730:"Stone IPA W/ Moroccan Mint Tea",116251:"Stone IPA W/Wildflower Honey, Kumquats & Coriander - On Cask",156448:"Stone IPA With Mango & White Habanero",122903:"Stone Levitation With Apricot Kernels And Bing Cherries",127739:"Stone Liberty ImperiALS Red",150826:"Stone Liberty Station / Birra Artigianale Toccalmatto Pampepato Imp. Porter",123066:"Stone Liberty Station / Fountainhead Slapping Violets",118690:"Stone Liberty Station / J. Wakefield Brewing Hot Lil' Miami Tart",120547:"Stone Liberty Station 1st Anniversary Ale",121206:"Stone Liberty Station 1st Anniversary Ale W/ Mosaic Hops & Orange Peel Cask",148557:"Stone Liberty Station Bottle On The Map – ConfidentALE",144029:"Stone Liberty Station Buoy 1 SD Pale Ale",137089:"Stone Liberty Station Call It What You Want",114889:"Stone Liberty Station Cliché",138412:"Stone Liberty Station Distribute Tribute",129994:"Stone Liberty Station Galileo’s Four Moon Brew",154886:"Stone Liberty Station Harrowing IPA",151633:"Stone Liberty Station Highborn IPA",117360:"Stone Liberty Station Hop Squander",153573:"Stone Liberty Station J’s OT Stout",134669:"Stone Liberty Station Kick Rocks",139340:"Stone Liberty Station Lifeblood",141516:"Stone Liberty Station Lupulin Loop: Jarrylo",126666:"Stone Liberty Station Master Of Disguise",118546:"Stone Liberty Station Mimic",122845:"Stone Liberty Station Mimic W/ Anise And Orange Peel Cask",142472:"Stone Liberty Station NANO Arcana 10^-9",144030:"Stone Liberty Station New Desecrator",154316:"Stone Liberty Station OK When Hoppy",123709:"Stone Liberty Station Operation Homefront IPA",118545:"Stone Liberty Station Sesquipedalian IPA",120549:"Stone Liberty Station Simcoe's For Sartori",119110:"Stone Liberty Station Simcoe's For Satori",129086:"Stone Liberty Station Some White",154404:"Stone Liberty Station The Lupulin Loop: Azacca",137734:"Stone Liberty Station The Lupulin Loop: Comet",147846:"Stone Liberty Station The Lupulin Loop: Dr. Rudi",154490:"Stone Liberty Station The Lupulin Loop: HBC 342",146600:"Stone Liberty Station The Lupulin Loop: Jarrylo",154405:"Stone Liberty Station The Lupulin Loop: Sterling",132592:"Stone Liberty Station The Lupulin Loop: Topaz",129996:"Stone Liberty Station The Tao Of Sage IPA",129993:"Stone Liberty Station Unicorn Summoning Ale",95044:"Stone Liberty Station Witty Moron",117173:"Stone Liberty Station/Congregation Ales House Cut Oatmeal Stout",117172:"Stone Liberty Station/Congregation Ales Stone Cut Oatmeal Stout",125929:"Stone Liberty The Sacred Druid",117586:"Stone Old Guardian Barley Wine Style Ale",142286:"Stone Old Guardian Barley Wine Style Ale 2014",87:"Stone Pale Ale",156451:"Stone Pale Ale With Hickory & Cranberries",97607:"Stone Reason Be Damned",119938:"Stone Ruination Grapefruit Slam",4083:"Stone Ruination IPA",34456:"Stone Ruination IPA - Double Dry Hopped",119977:"Stone Ruination IPA - With Citra",127647:"Stone Ruination IPA Double Dry Hopped W/ Centennial Hops And American Oak",155950:"Stone Ruination IPA W/Agave & Lime",82250:"Stone RuinTen IPA",128618:"Stone RuinTen IPA W/Amarillo Hops On Cask",118062:"Stone Saison",151014:"Stone Smoked Porter -with Coffee And Cocoa Nibs",146766:"Stone To IPA With Lemon & Vanilla",142717:"Sublimely Self-Righteous - Spruce Tips & Cherry",38470:"Sublimely Self-Righteous Ale",60106:"Sublimely Self-Righteous Ale - Double Dry Hopped",85702:"Sublimely Self-Righteous Ale With Espresso Beans",144414:"Sublimely Self-Righteous Ale With Nutmeg, Allspice, Cinnamon & Orange Peel",114952:"The Tiger Cub Saison - White Wine Barrel Aged",127844:"Unapologetic Ipa",112880:"Vallantine IPA",119966:"W00Tstout 2.0",126363:"Waypoint Public/Stone Brewing Co. Amanda Vs. The Arbolcots",131496:"Wheat Ale W/ Blueberries",150871:"Winter Harvest"};

if (Meteor.isClient) {
    Template.body.helpers({
        beers: function() {
            var sort = {};
            sort['factors.'+Session.get('factor')+'.strength'] = -1;
            return BeerFactors.find({}, {sort: sort});
        },
        factors: function() {
            return Factors.find({})
        }
    });

    Template.body.events({
        'click button': function(e) {
            var factor = parseInt(e.currentTarget.getAttribute('data-factor'));
            Session.set('factor', factor-1);
        }
    })

    Template.beer.helpers({
        name: function() {
            return beerMap[this.beer_id];
        },
        width: function() {
            // if (isNaN(this.strength*100)) {
            //     console.log(this.strength);
            // }
            return 'calc('+(this.strength*100).toFixed(5)+'%)';
        },
        widthString: function() {
            return (this.strength*100).toFixed(1)+'%';
        },
        spanWidth: function() {
            return 'calc(50% / '+this.num_factors+')';
        },
        color: function() {
            return 'hsl('+(this.factor_id/this.num_factors)*270+', 50%, 80%)';
        },
        newFactors: function() {
            var totalFactors = this.factors.length;
            var totalStrength = this.total_strength;
            return this.factors.map(function(factor) {
                return {
                    strength: factor.strength / totalStrength,
                    factor_id: factor.factor_id,
                    num_factors: totalFactors
                };
            })
        }
    })

    Meteor.startup(function () {
        Session.set('factor', 0);
        Meteor.subscribe('beer_factors');
        Meteor.subscribe('factors');
    });
}

if (Meteor.isServer) {
    Meteor.publish('beer_factors', function() {
        var results = BeerFactors.find({});
        return results;
    });

    Meteor.publish('factors', function() {
        var results = Factors.find({});
        return results;
    });
}
