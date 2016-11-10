"use strict";

//Setup
var contacts = [{
  "firstName": "Akira",
  "lastName": "Laine",
  "number": "0543236543",
  "likes": ["Pizza", "Coding", "Brownie Points"]
}, {
  "firstName": "Harry",
  "lastName": "Potter",
  "number": "0994372684",
  "likes": ["Hogwarts", "Magic", "Hagrid"]
}, {
  "firstName": "Sherlock",
  "lastName": "Holmes",
  "number": "0487345643",
  "likes": ["Intruiging Cases", "Violin"]
}, {
  "firstName": "Kristian",
  "lastName": "Vos",
  "number": "unknown",
  "likes": ["Javascript", "Gaming", "Foxes"]
}];

function lookUp(firstName, prop) {
  // Only change code below this line

  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) {
      if (contacts[i].hasOwnProperty([prop])) {

        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }

  return "No such contact";

  // Only change code above this line
}
// Change these values to test your function
lookUp("Akira", "likes");

//# sourceMappingURL=profile-lookup-compiled.js.map