// Waypoint: Accessing Nested Objects in JSON
// The properties and sub-properties of JSON objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested JSON Object:

// var ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// }
// ourStorage.cabinet["top drawer"].folder2;  // "secrets"
// ourStoage.desk.drawer; // "stapler"
// Instructions
// Access the myStorage JSON object to retrieve the contents of the glove box. Only use object notation for properties with a space in their name.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// gloveBoxContents should equal "maps"
// Use dot and bracket notation to access myStorage
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

