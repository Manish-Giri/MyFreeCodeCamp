"use strict";

/*Waypoint: Find Numbers with Regular Expressions
We can use special selectors in Regular Expressions to select a particular type of value.

One such selector is the digit selector \d which is used to grab the numbers in a string.

It is used like this: /\d/g.

For numbers this is often written as /\d+/g, where the + following the digit selector allows this regular expression to match multi-digit numbers.

Use the \d selector to select the number of numbers in the string, allowing for the possibility of multi-digit numbers.*/

var test = function () {

  var testString = "There are 3 cats but 4 dogs.";

  // Only change code below this line.

  var expression = /\d+/g;

  // Only change code above this line.

  return testString.match(expression).length;
}();(function () {
  return test;
})();

//# sourceMappingURL=39-compiled.js.map