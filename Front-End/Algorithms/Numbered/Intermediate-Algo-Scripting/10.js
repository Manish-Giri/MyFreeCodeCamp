// Bonfire: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Arguments object
// Array.reduce()
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// unite([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// unite([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

function unite(arr1, arr2, arr3) {
	var combinedArgs = [];
	for(var i = 0; i < arguments.length; i++) {
		combinedArgs.push(arguments[i]);
	}

	console.log(combinedArgs);
	var result = [];
	for(i = 0; i < combinedArgs.length; i++) {
		combinedArgs[i].forEach(function(val) {
			if(! result.includes(val)) {
				result.push(val);
			}
		});
	}
	console.log(result);
  return result;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
