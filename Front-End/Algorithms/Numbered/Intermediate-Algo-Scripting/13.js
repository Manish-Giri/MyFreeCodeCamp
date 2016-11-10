// Bonfire: Sum All Odd Fibonacci Numbers
// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

// As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Remainder
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.



function sumFibs(num) {
 var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    console.log(result);
    return result;
}

//sumFibs(4);
//sumFibs(4000000);
sumFibs(75024);
