// Waypoint: Return Early Pattern for Functions
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

// Example

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// myFun();
// The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.

// Instructions
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// abTest(2,2) should return a number
// abTest(2,2) should return 8
// abTest(-2,2) should return undefined
// abTest(2,-2) should return undefined
// abTest(2,8) should return 18
// abTest(3,3) shou return 12
"use strict";

//# sourceMappingURL=76-compiled.js.map