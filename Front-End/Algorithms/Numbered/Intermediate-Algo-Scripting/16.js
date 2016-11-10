// Bonfire: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.filter()
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// find([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function find(arr, func) {
  var result = arr.filter(func);
  var num = result[0];
  return num;
}

console.log(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) );
//console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));