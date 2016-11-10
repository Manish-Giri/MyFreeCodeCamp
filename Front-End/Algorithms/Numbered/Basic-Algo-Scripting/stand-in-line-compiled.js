"use strict";

// Bonfire: Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

// Write a function queue which takes an "array" and an "item" as arguments. Add the item onto the end of the array, then remove and return the item at the front of the queue.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// queue([], 1) should return 1
// queue([2], 1) should return 2
// After queue(myArr, 10), myArr[4] should be 10

// Setup
var myArr = [1, 2, 3, 4, 5];

function queue(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift(); // Change this line
}

// Display Code
console.log("Before: " + JSON.stringify(myArr));
console.log(queue(myArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(myArr));

//# sourceMappingURL=stand-in-line-compiled.js.map