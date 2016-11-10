function palindrome(str) {
  // Good luck!
  var inputStr = str.replace(/[^A-Z^a-z^0-9]/g, '');
    inputStr = inputStr.trim().toLowerCase();
    return inputStr == inputStr.split("").reverse().join("");
}



palindrome("eye");
