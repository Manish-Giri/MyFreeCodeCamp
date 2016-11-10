"use strict";

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

var myArray = [];

// Only change code below this line.

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Only change code above this line.

if (typeof myArray !== "undefined") {
  (function () {
    return myArray;
  })();
}

//# sourceMappingURL=count-backwards-for-loop-compiled.js.map