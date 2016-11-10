function convert(num) {
var decimals = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var result = '';
    for(var i = 0; i < decimals.length; i++) {
    	while(decimals[i] <= num) {
    		result += romans[i];
    		num -= decimals[i];

    	}
    }
    console.log(result);
	return result;
}

convert(36);
