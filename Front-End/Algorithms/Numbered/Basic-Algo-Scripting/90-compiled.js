"use strict";

// Bonfire: Record Collection
// You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.

// Write a function which takes an id, a property (prop), and a value.

// For the given id in collection:

// If value is non-blank (value !== ""), then update or set the value for the prop.

// If the prop is "tracks" and value is non-blank, push the value onto the end of the tracks array.

// If value is blank, delete that prop.

// Always return the entire collection object.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// After update(5439, "artist", "ABBA"), artist should be "ABBA"
// After update(2548, "artist", ""), artist should not be set
// After update(1245, "tracks", "Addicted to Love"), tracks should have a length of 1
// After update(2548, "tracks", ""), tracks should not be set
// Setup


// Setup
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {

  if (value !== "") {
    if (prop === "tracks") {
      collection[id].tracks.push(value);
      //collection[id][prop].push(value);
    } else {
      collection[id][prop] = value;
    }
  } else if (value === "") {
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
update(5439, "artist", "ABBA");

//console.log(collection);
// Alter values below to test your code
//update(5439, "artist", "ABBA");

update(1245, "tracks", "Addicted to Love");

console.log(collection);

//# sourceMappingURL=90-compiled.js.map