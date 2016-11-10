"use strict";

/*Bonfire: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()
  Run tests (ctrl + enter)
  Reset	  Help	  Bug

10

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.*/

function sumAll(arr) {
  var highest,
      lowest = 0;
  if (arr[0] < arr[1]) {
    lowest = arr[0];
    highest = arr[1];
  } else {
    lowest = arr[1];
    highest = arr[0];
  }
  var sum = 0;

  for (var i = lowest; i <= highest; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);

//# sourceMappingURL=1-compiled.js.map