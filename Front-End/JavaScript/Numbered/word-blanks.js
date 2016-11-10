// Bonfire: Word Blanks
// We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". We have provided a framework for testing your results with different words.

// You will need to use string operators to build a new string, result, using the provided variables:

// myNoun, myAdjective, myVerb, and myAdverb.

// The tests will run your function with several different inputs to make sure it works properly.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// wordBlanks("","","","") should return a string
// wordBlanks("","","","") should return at least 30 characters with empty inputs
// wordBlanks("dog", "big", "ran", "quickly") should contain all of the passed words.
// wordBlanks("cat", "little", "hit", "slowly") should contain all of the passed words.
// // 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    
    result = myNoun + myAdjective + "_____________! he said ________ as he jumped into his convertible exclamation adverb______ and drove off with his __________ wife.noun                          adjective" + myVerb + myAdverb;
    // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");