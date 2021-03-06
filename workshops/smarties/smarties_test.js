var smarties = [{ color : "white", qty : 5},
    { color : "blue", qty : 11},
    { color : "orange", qty : 17},
    { color : "pink", qty : 6},
    { color : "yellow", qty : 1},
    { color : "red", qty : 11},
    { color : "black", qty : 13},
    { color : "yellow", qty : 10},
    { color : "blue", qty : 19},
    { color : "brown", qty : 15}];

    var smartyList = [
        { color : "white"},{ color : "blue"},{ color : "orange"},{ color : "white"},
        { color : "blue"},{ color : "orange"},{ color : "white"},{ color : "blue"},
        { color : "orange"},{ color : "pink"},{ color : "yellow"},{ color : "red"},
    ];

test("how many orange smarties do we have?", function(assert){
    var smarty = findSmartiesByColor(smarties, "orange");
    assert.equal(smarty.qty, 9);
});

test("find color of smarties we have the most of", function(assert){
    var smarty = findMostAbundantSmartie(smarties);
    assert.equal(smarty.color, 'blue');
});

test("find all the smarties we have less than 7 for", function(assert){
    var smartieList = findSmartiesLessThan(smarties, 7);
    assert.equal(smarties.length, 3);
});

test("can I search smarties using a function", function(assert){

    var smartieList = findSmarties(smarties, function(smarty){
        return smarty.qty % 2 === 0;
    });

    assert.deepEqual(smartieList, [
	    { color : "pink", qty : 6},
    	    { color : "yellow", qty : 10}
	])

});

test("can I group smarties", function(assert){
    var smartieGroups = groupSmarties(smartyList);

    assert.deepEqual(smartieGroups, {
        white : 0,
        blue : 0,
        orange : 0,
        white : 0,
        pink : 0,
        yellow : 0,
        red : 0
    });

});

test("can I sort smarties", function(assert){
    var sortedSmarties = sortSmarties(smarties);
    assert.equal(sortedSmarties, []);
});

test("can I do an control break?", function(assert){
    var goals = [
        { team : "Man U", goals : 1 },
        { team : "Man U", goals : 2 },
        { team : "Man U", goals : 1 },
        { team : "Arsenal", goals : 1 },
        { team : "Arsenal", goals : 1 },
        { team : "Arsenal", goals : 3 },
        { team : "Chelsea", goals : 0 },
        { team : "Chelsea", goals : 1 },
        { team : "Chelsea", goals : 0 },
    ];

    var teamsWithTotal = addTotalForTeams(goals);

    assert.deepEqual(teamsWithTotal[3], { team : "Man U", total : 4 });
    assert.deepEqual(teamsWithTotal[7], { team : "Arsenal", total : 5 });
    assert.deepEqual(teamsWithTotal[3], { team : "Chelsea", total : 1 });

});
