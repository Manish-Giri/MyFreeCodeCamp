"use strict";

var ourArray = ["Stimpson", "J", ["cat"]];

removedFromOurArray = ourArray.shift(); // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

var myArray = ["John", 23, ["dog", 3]];

// Only change code below this line.

var removedFromMyArray = myArray.shift();

// Only change code above this line.


(function (y, z) {
  return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);
})(myArray, removedFromMyArray);

//# sourceMappingURL=manipulate-arrays-with-shift-compiled.js.map