"use strict";

// Bonfire: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Boolean Objects
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// *
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.


// boo(true) should return true.
// boo(false) should return true.
// boo([1, 2, 3]) should return false.
// boo([].slice) should return false.
// boo({ "a": 1 }) should return false.
// boo(1) should return false.
// boo(NaN) should return false.
// boo("a") should return false.

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool == "boolean";
}

boo(null);

//# sourceMappingURL=9-compiled.js.map