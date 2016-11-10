var test = (function(){
  var testString = "How many non-space characters are there in this sentence?";

  // Only change code below this line.

  var expression = /\S/g;

  // Only change code above this line.

  return testString.match(expression).length;
})();(function(){return test;})();
