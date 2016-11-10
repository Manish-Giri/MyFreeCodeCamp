"use strict";

/*Bonfire: Repeat a string repeat a string
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object*/

function repeat(str, num) {
  // repeat after me
  return num > 0 ? str.concat(repeat(str, num - 1)) : '';
}

repeat("abc", 3);

//# sourceMappingURL=9-compiled.js.map