"use strict";

// Bonfire: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// The provided code transforms the input into an array for you, codeArr. Place the decoded values into the decodedArr array where the provided code will transform it back into a string.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
function rot13(encodedStr) {
  var codeArr = encodedStr.split(""); // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  console.log(codeArr);

  var re = /[A-Z]/;

  for (var i = 0; i < codeArr.length; i++) {
    if (re.test(codeArr[i])) {
      var pos = codeArr[i].charCodeAt(0);
      var newPos = 0;
      if (pos >= 65 && pos <= 77) {
        newPos = pos + 13;
      } else if (pos >= 78 && pos <= 90) {
        newPos = pos - 13;
      }

      decodedArr.push(String.fromCharCode(newPos).toUpperCase());
    } else {
      console.log("entering !RE");
      decodedArr.push(codeArr[i]);
    }
  }

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

//# sourceMappingURL=97-compiled.js.map