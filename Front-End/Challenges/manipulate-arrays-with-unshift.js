var ourArray = ["Stimpson", "J", ["cat"]];

ourArray.shift(); // ourArray now equals ["J", ["cat"]]

ourArray.unshift("happy"); // ourArray now equals ["happy", "J", ["cat"]]

var myArray = ["John", 23, ["dog", 3]];

myArray.shift();

// Only change code below this line.
myArray.unshift("Paul");


// Only change code above this line.

(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
