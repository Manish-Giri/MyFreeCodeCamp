"use strict";

var a = 4;
var b = 5;

function ourFunction(a, b) {
  return a - b;
}

// Only change code below this line.
function myFunction(a, b) {

  return a + b;
}

myFunction(10, 23);

// Only change code above this line.

if (typeof myFunction !== "undefined") {
  var f = myFunction(a, b);
  (function () {
    return f;
  })();
}

//# sourceMappingURL=js-functions-compiled.js.map