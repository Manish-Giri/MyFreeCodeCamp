"use strict";

// Bonfire: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.isArray()
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// *
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.


// steamroller([[["a"]], [["b"]]]) should return ["a", "b"].
// steamroller([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamroller([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamroller([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

function flattener(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  return temp;
}

function steamroller(arr) {
  // I'm a steamroller, baby
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(flattener(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//steamroller([1, [2], [3, [[4]]]]);
console.log(steamroller([1, [2], [3, [[4]]]]));

//# sourceMappingURL=18-compiled.js.map