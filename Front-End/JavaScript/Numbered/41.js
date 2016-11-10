/*Waypoint: Invert Regular Expression Matches with JavaScript
You can invert any match by using the uppercase version of the regular expression selector.

For example, \s will match any whitespace, and \S will match anything that isn't whitespace.

Use /\S/g to count the number of non-whitespace characters in testString.*/\

var test = (function(){
  var testString = "How many non-space characters are there in this sentence?";

  // Only change code below this line.

  var expression = /\S/g;

  // Only change code above this line.

  return testString.match(expression).length;
})();(function(){return test;})();
