"use strict";

Array.prototype.myMap = function (func) {
  var tempArr = [];
  for (var i = 0; i < this.length; i++) {
    tempArr.push(func(this[i]));
  }
  return tempArr;
};

var arr = [1, 2, 3, 4, 5];
console.log("Original Array: ", arr); // Original Array:  [1, 2, 3, 4, 5]
var newArr = arr.myMap(function (num) {
  // We can call myMap off the array type now because I extended Array with Array.prototype.myMap above
  return num * 2;
});
console.log("New Array ", newArr); // New Array:  [2, 4, 6, 8, 10]

//# sourceMappingURL=myMap-compiled.js.map