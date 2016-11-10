'use strict';

/*Bonfire: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.splice()
Array.indexOf()
Array.join()
  Run tests (ctrl + enter)
  Reset	  Help	  Bug

/**
  * Your output will go here.
  * Console.log() -type statements
  * will appear in your browser's
  * DevTools JavaScript console.
  */
/*
convert(5) should return "V".
convert(9) should return "IX".
convert(12) should return "XII".
convert(16) should return "XVI".
convert(29) should return "XXIX".
convert(44) should return "XLIV".
convert(45) should return "XLV"
convert(68) should return "LXVIII"
convert(83) should return "LXXXIII"
convert(97) should return "XCVII"
convert(99) should return "XCIX"
convert(500) should return "D"
convert(501) should return "DI"
convert(649) should return "DCXLIX"
convert(798) should return "DCCXCVIII"
convert(891) should return "DCCCXCI"
convert(1000) should return "M"
convert(1004) should return "MIV"
convert(1006) should return "MVI"
convert(1023) should return "MXXIII"
convert(2014) should return "MMXIV"
convert(3999) should return "MMMCMXCIX"*/

// Create arrays with default conversion with matching indices.

function convert(num) {
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var result = '';
  for (var i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      result += romans[i];
      num -= decimals[i];
    }
  }
  console.log(result);
  return result;
}

convert(3999);

//# sourceMappingURL=3-compiled.js.map