// Bonfire: Sum All Primes
// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

// The provided number may not be a prime.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// For Loops
// Array.push()
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
  

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.*/


function isPrime(num) {

	for(var j = num-1; j > 1; j--) {
		if(num % j === 0) {
			return false;
		}
		else {
			continue;
		}
	}

	return true;
}

function sumPrimes(num) {
	var result = 0;
	for(var i = num; i >= 2; i--) {
		if (isPrime(i)) {
			result += i;
		}
		else {
			continue;
		}
	}
  return result;
}

console.log(sumPrimes(977));
//console.log(isPrime(37));