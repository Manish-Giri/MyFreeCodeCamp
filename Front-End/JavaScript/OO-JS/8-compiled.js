"use strict";

/*Waypoint: Filter Arrays with filter
The filter method is used to iterate through an array and filter out elements where a given condition is not true.

filter is passed a callback function which takes the current value (we've called that val) as an argument.

Any array element for which the callback returns true will be kept and elements that return false will be filtered out.

The following code is an example of using filter to remove array elements that are not even numbers:

Note: We omit the second and third arguments since we only need the value

array = array.filter(function(val) {

  return val % 2 === 0;

});

Use filter to remove all elements from array that are greater than 5.*/

var oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Only change code below this line.

var newArray = oldArray.filter(function (val) {
  return val <= 5;
});

// Only change code above this line.

(function () {
  return newArray;
})();

//# sourceMappingURL=8-compiled.js.map