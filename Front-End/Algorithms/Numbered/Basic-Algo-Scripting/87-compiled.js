"use strict";

// Waypoint: Introducing JavaScript Object Notation JSON
// JavaScript Object Notation or JSON uses the format of Javascript Objects to store data. JSON is flexible becuase it allows for data structures with arbitrary combinations of strings, numbers, booleans, arrays, and objects.

// Here is an example of a JSON object:

// var ourMusic = [
//   {
//     "artist": "Daft Punk",
//     "title": "Homework",
//     "release_year": 1997,
//     "formats": [ 
//       "CD", 
//       "Cassette", 
//       "LP" ],
//     "gold": true
//   }
// ];
// This is an array of objects and the object has various pieces of metadata about an album. It also has a nested array of formats. Additional album records could be added to the top level array.

// Instructions
// Add a new album to the myMusic JSON object. Add artist and title strings, release_year year, and a formats array of strings.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// myMusic should be an array
// myMusic should have at least two elements
// myMusic[1] should be an object
// myMusic[1] should have at least 4 properties
// myMusic[1] should contain an artist property which is a string
// myMusic[1] should contain a title property which is a string
// myMusic[1] should contain a release_year property which is a number
// myMusic[1] should contain a formats property which is an array
// formats should be an array of strings with at least two elements
var myMusic = [{
  "artist": "Billy Joel",
  "title": "Piano Man",
  "release_year": 1993,
  "formats": ["CS", "8T", "LP"],
  "gold": true
},
// Add record here
{
  "artist": "Billy Joel",
  "title": "Piano Man",
  "release_year": 1993,
  "formats": ["CS", "8T", "LP"],
  "gold": true
}];

//# sourceMappingURL=87-compiled.js.map