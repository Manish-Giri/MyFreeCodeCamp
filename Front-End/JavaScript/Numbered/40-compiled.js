"use strict";

/*Waypoint: Find Whitespace with Regular Expressions
We can also use regular expression selectors like \s to find whitespace in a string.

The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed).

The whitespace regular expression looks like this:

/\s+/g

Use it to select all the whitespace characters in the sentence string.*/

var test = function () {
  var testString = "How many spaces are there in this sentence?";

  // Only change code below this line.

  var expression = /\s+/g;

  // Only change code above this line.

  return testString.match(expression).length;
}();(function () {
  return test;
})();

//# sourceMappingURL=40-compiled.js.map