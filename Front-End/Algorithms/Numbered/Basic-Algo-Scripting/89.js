// Waypoint: Accessing Nested Arrays in JSON
// As we have seen in earlier examples, JSON objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

// Here is an example of how to access a nested array:

// var ourPets = { 
//   "cats": [
//     "Meowzer",
//     "Fluffy",
//     "Kit-Cat"
//   ],
//   "dogs:" [
//     "Spot",
//     "Bowser",
//     "Frankie"
//   ]
// };
// ourPets.cats[1]; // "Fluffy"
// ourPets.dogs[0]; // "Spot"
// Instructions
// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// secondTree should equal "pine"
// Use dot and bracket notation to access myPlants
// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

