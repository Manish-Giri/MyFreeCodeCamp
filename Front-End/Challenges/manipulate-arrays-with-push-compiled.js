"use strict";

var ourArray = ["Stimpson", "J", ["cat"]];

ourArray.pop(); // ourArray now equals ["Stimpson", "J"]

ourArray.push(["happy", "joy"]); // ourArray now equals ["Stimpson", "J", ["happy", "joy"]]

var myArray = ["John", 23, ["cat", 2]];

myArray.pop();

// Only change code below this line.
myArray.push(["dog", 3]);

// Only change code above this line.

(function (z) {
  return 'myArray = ' + JSON.stringify(z);
})(myArray);

//# sourceMappingURL=manipulate-arrays-with-push-compiled.js.map