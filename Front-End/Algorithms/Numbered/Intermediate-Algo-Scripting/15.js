// Bonfire: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Smallest Common Multiple
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([1, 13]) should return 360360.

function smallestCommons(arr) {
      for(i = Math.max(...arr); i >= Math.min(...arr); i--) arr.push(i);

  return arr.slice(2).reduce(function(x,y){
    var a = x, b = y, t = 0;    
    while(a % b){a = a % b; t = a; a = b; b = t;}
    return x / b * y;
  });
}

console.log(smallestCommons([1,5]));
//smallestCommons([1,5]);

//console.log(isDivisible(60, [1,2,3,4,5]));

