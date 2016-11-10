"use strict";

/**
 * Created by manishgiri on 8/4/16.
 */
// Map the Debris
// Return a new array that transforms the element's average altitude into their orbital periods.
//
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//
// You can read about orbital periods on wikipedia.
//
//     The values should be rounded to the nearest whole number. The body being orbited is Earth.
//
//     The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
//     Here are some helpful links:
//
//     Math.pow()
// Run tests (ctrl + enter)
// Reset	  Help	  Bug
//
// /**
//  * Your output will go here.
//  * Any console.log() -type
//  * statements will appear in
//  * your browser's DevTools
//  * JavaScript console as well.
//  */
//
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].


function orbitalPeriod(arr) {
    var GM = 398600.4418;
    //var GMM = 398600441.8;

    var earthRadius = 6367.4447;
    //var earthRadiusM = 6367444.7;

    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        var tempObj = arr[i];
        var resultObj = {};
        resultObj.name = tempObj["name"];

        var avgAlt = tempObj["avgAlt"];
        //console.log(avgAlt);
        var sum = earthRadius + avgAlt;
        var numerator = Math.pow(sum, 3);
        var toRoot = numerator / GM;
        var rooted = Math.sqrt(toRoot);
        var timeInSeconds = 2 * Math.PI * rooted;
        var timeInSecondsRounded = Math.round(timeInSeconds);

        resultObj.orbitalPeriod = timeInSecondsRounded;
        resultArr.push(resultObj);
    }

    console.log(resultArr);
    return resultArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);

//# sourceMappingURL=map-the-debris-compiled.js.map