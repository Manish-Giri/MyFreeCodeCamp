/*Bonfire: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.charAt()*/

function titleCase(str) {
  var strWords = str.toLowerCase().split(" ");
  var newWords = [];
  for(var i = 0; i < strWords.length; i++) {
    newWords.push(capitalize(strWords[i]));
  }
  var newWord = newWords.join(" ");
  return newWord;
}

function capitalize(word) {
  
    var firstLetter = word[0];
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + word.slice(1);
  
}
titleCase("I'm a little tea pot");
