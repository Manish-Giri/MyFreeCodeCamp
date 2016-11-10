"use strict";

/*Bonfire: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()*/

function destroyer(arr) {
  var sArray = arguments[0];
  var filterArray = [];
  for (var i = 1; i < arguments.length; i++) {
    filterArray[i - 1] = arguments[i];
  }
  for (var i = 0; i < filterArray.length; i++) {
    sArray = sArray.filter(function (val) {
      return !(val === filterArray[i]);
    });
  }
  return sArray;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

//# sourceMappingURL=15-compiled.js.map