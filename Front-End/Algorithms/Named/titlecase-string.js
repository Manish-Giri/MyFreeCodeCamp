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
