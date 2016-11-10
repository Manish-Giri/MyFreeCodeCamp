"use strict";

function reverseString(str) {
  var strSpl = str.split("");
  strSpl = strSpl.reverse();
  var joined = strSpl.join("");
  return joined;
}

reverseString("hello");

//# sourceMappingURL=reverse-string-compiled.js.map