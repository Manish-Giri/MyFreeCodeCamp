var test = (function() {

  var testString = "There are 3 cats but 4 dogs.";

  // Only change code below this line.

  var expression = /\d+/g;

  // Only change code above this line.

  return testString.match(expression).length;

})();(function(){return test;})();
