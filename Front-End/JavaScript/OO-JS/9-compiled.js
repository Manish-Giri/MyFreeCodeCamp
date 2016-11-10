"use strict";

/*You can use the method sort to easily sort the values in an array alphabetically or numerically.

Unlike the previous array methods we have been looking at, sort actually alters the array in place. However, it also returns this sorted array.

sort can be passed a compare function as a callback. If no compare function is passed in it will convert the values to strings and sort alphabetically.

Here is an example of using sort with a compare function that will sort the elements from smallest to largest number:

var array = [1, 12, 21, 2];

array.sort(function(a, b) {

  return a - b;

});

Use sort to sort array from largest to smallest.*/

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function (a, b) {
  return b - a;
});

// Only change code above this line.

(function () {
  return array;
})();

//# sourceMappingURL=9-compiled.js.map