"use strict";

/*Bonfire: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.push()
String.split()
  Run tests (ctrl + enter)
  Reset	  Help	  Bug*/

/**
  * Your output will go here.
  * Console.log() -type statements
  * will appear in your browser's
  * DevTools JavaScript console.
  */

// pair("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pair("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pair("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function pair(str) {
	var pair1 = ["A", "T"];
	var pair2 = ["C", "G"];
	var toPair = str.split("");
	var result = [];
	for (var i = 0; i < toPair.length; i++) {
		var arr = [];
		arr.push(toPair[i]);
		if (pair1[0] === toPair[i]) {
			arr.push(pair1[1]);
		} else if (pair1[1] === toPair[i]) {
			arr.push(pair1[0]);
		} else if (pair2[0] === toPair[i]) {
			arr.push(pair2[1]);
		} else if (pair2[1] === toPair[i]) {
			arr.push(pair2[0]);
		}
		result.push(arr);
	}
	console.log(result);
	return result;
}

pair("GCG");

//# sourceMappingURL=7-compiled.js.map