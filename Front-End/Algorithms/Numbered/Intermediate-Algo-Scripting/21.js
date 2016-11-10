// Bonfire: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, add(2, 3) should return 5, and add(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = add(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Closures
// Arguments object
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// add(2, 3) should return 5.
// add(2)(3) should return 5.
// add("http://bit.ly/IqT6zt") should return undefined.
// add(2, "3") should return undefined.
// add(2)([3]) should return undefined.

function add() {
	if(arguments.length === 2) {
		//if(Number.isNaN(arguments[0]) || Number.isNaN(arguments[1]))
        
        if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
			return undefined;
		}
		else {
			return arguments[0] + arguments[1];
		}
	}
	else {
        var num1 = arguments[0];
        if (typeof num1 !== "number") {
            return undefined;
        }
        else {
            return function(num) {
                if(typeof num !== "number") {
                    return undefined;
                }
                
                  
                    return num1 + num;
                
            };
       }
	}
  return false;
}

//console.log(add(2,3));
//console.log(add(2)(3));
//console.log(add(2, "3"));
//console.log(add("http://bit.ly/IqT6zt"));
//console.log(add(2, "3"));
console.log(add(2)([3]));