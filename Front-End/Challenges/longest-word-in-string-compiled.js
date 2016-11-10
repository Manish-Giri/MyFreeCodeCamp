"use strict";

function findLongestWord(str) {
  //str = str.replace(/^[A-Za-z0-9]/g, "");
  var strWords = str.split(" ");
  var longestCount = 0;
  for (var i = 0; i < strWords.length; i++) {
    if (strWords[i].length > longestCount) {
      longestCount = strWords[i].length;
    }
  }
  return longestCount;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//# sourceMappingURL=longest-word-in-string-compiled.js.map