"use strict";

// Bonfire: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
// every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
// every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
// every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
// every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
// every([{"single": "yes"}], "single") should return true
// every([{"single": ""}, {"single": "double"}], "single") should return false
// every([{"single": "double"}, {"single": undefined}], "single") should return false
// every([{"single": "double"}, {"single": NaN}], "single") should return false

function every(collection, pre) {
  // Is everyone being true?
  for (var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    if (!obj.hasOwnProperty(pre)) {
      return false;
    }
    for (var prop in obj) {
      if (!obj[prop]) {
        return false;
      }
    }
  }
  return true;
}

every([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");

//# sourceMappingURL=20-compiled.js.map