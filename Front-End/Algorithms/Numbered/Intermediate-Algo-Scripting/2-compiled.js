"use strict";

/*Bonfire: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the original arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
  Run tests (ctrl + enter)
  Reset	  Help	  Bug

5,4,5

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/

function diff(arr1, arr2) {
  var merged = arr1.concat(arr2);

  // Same, same; but different.
  var newArr = merged.filter(function (val) {
    return arr1.indexOf(val) == -1 || arr2.indexOf(val) == -1;
  });
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//# sourceMappingURL=2-compiled.js.map