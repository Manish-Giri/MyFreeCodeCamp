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

sumPrimes(10);
