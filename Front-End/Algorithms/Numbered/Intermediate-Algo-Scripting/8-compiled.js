"use strict";

// Bonfire: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.charCodeAt()
// String.fromCharCode()
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.


function fearNotLetter(str) {

	var letters = str.split("");
	var letterCode = [];
	for (var i = 0; i < letters.length; i++) {
		letterCode.push(letters[i].charCodeAt(0));
	}
	console.log(letterCode);
	var start = letterCode[0];
	var resPos = 0;
	for (var i = 1; i < letterCode.length; i++) {
		if (++start != letterCode[i]) {
			resPos = start;
			break;
		}
	}

	console.log(String.fromCharCode(resPos));
	if (!resPos) {
		return undefined;
	}
	return String.fromCharCode(resPos);
}

fearNotLetter("abce");

//# sourceMappingURL=8-compiled.js.map