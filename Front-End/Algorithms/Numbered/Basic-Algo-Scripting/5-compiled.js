"use strict";

// Bonfire: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.split()
// String.length

// Bonfire: Find the Longest Word in a String
// Author: @manish-giri
// Challenge: http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string?solution=function%20findLongestWord(str)%20%7B%0A%20%20%2F%2Fstr%20%3D%20str.replace(%2F%5E%5BA-Za-z0-9%5D%2Fg%2C%20%22%22)%3B%0A%20%20var%20strWords%20%3D%20str.split(%22%20%22)%3B%0A%20%20var%20longestCount%20%3D%200%3B%0A%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20strWords.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20if(strWords%5Bi%5D.length%20%3E%20longestCount)%20%7B%0A%20%20%20%20%20%20longestCount%20%3D%20strWords%5Bi%5D.length%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20longestCount%3B%0A%7D%0A%0AfindLongestWord(%22The%20quick%20brown%20fox%20jumped%20over%20the%20lazy%20dog%22)%3B%0A
// Learn to Code at Free Code Camp (www.freecodecamp.com)

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

//# sourceMappingURL=5-compiled.js.map