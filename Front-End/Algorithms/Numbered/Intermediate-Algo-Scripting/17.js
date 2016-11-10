// Bonfire: Drop it
// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Arguments object
// Array.shift()
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// *
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
  

// drop([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// drop([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// drop([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// drop([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// drop([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// drop([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

function drop(arr, func) {
  // Drop them elements.

  for(var i = 0; i < arr.length; i++) {
  	if(func(arr[i])) {
  		return arr;
  	}
  	else {
  		i--;
  		arr.shift();
  	}
  }

  return arr;
}

console.log(drop([1, 2, 3, 4], function(n){return n >= 3;}));
	//should return [3, 4]);
//drop([1, 2, 3], function(n) {return n < 3; });