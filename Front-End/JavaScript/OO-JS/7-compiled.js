"use strict";

/*Waypoint: Condense arrays with reduce
The array method reduce is used to iterate through an array and condense it into one value.

To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).

reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.

Here is an example of reduce being used to subtract all the values of an array:

var singleVal = array.reduce(function(previousVal, currentVal) {

  return previousVal - currentVal;

}, 0);

Use the reduce method to sum all the values in array and assign it to singleVal.*/

var array = [4, 5, 6, 7, 8];

// Only change code below this line.

var singleVal = array.reduce(function (prev, cur) {
  return prev + cur;
}, 0);

// Only change code above this line.

(function () {
  return singleVal;
})();

//# sourceMappingURL=7-compiled.js.map