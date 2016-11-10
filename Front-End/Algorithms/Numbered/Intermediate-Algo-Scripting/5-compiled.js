"use strict";

/*Bonfire: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.splice()
String.replace()
Array.join()
  Run tests (ctrl + enter)
  Reset	  Help	  Bug
*/
/**
  * Your output will go here.
  * Console.log() -type statements
  * will appear in your browser's
  * DevTools JavaScript console.
  */

/*myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "bonfires") should return "Let us get back to more Bonfires".
*/

function myReplace(str, before, after) {
	var words = str.split(" ");
	var wordPos = words.indexOf(before);
	console.log("Original sentence = " + str);
	console.log("Before pos = " + wordPos);
	var firstLetter = words[wordPos].charAt(0);
	var newWord = '';
	if (firstLetter === words[wordPos].charAt(0).toUpperCase()) {
		newWord = after.charAt(0).toUpperCase() + after.substring(1);
	} else if (firstLetter === words[wordPos].charAt(0).toLowerCase()) {
		newWord = after.charAt(0).toLowerCase() + after.substring(1);
	}
	console.log("New word = " + newWord);
	//console.log(words.splice(wordPos, 1, newWord).join(" "));
	words.splice(wordPos, 1, newWord);
	var newStr = words.join(" ");
	console.log(newStr);
	return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//# sourceMappingURL=5-compiled.js.map