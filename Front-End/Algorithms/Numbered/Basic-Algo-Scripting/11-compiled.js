"use strict";

/*Bonfire: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push*/

function chunk(arr, size) {
  // Break it up.
  var multiArr = [];
  var n = 0;
  while (n < arr.length) {
    multiArr.push(arr.slice(n, n + size));
    n += size;
  }

  return multiArr;
}

chunk(["a", "b", "c", "d"], 2);

//# sourceMappingURL=11-compiled.js.map