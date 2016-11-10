// JavaScript source code
//Bonfire: Check for Palindromes
//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

//We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.

//Here are some helpful links:

//String.replace()
//String.toLowerCase()

// Bonfire: Check for Palindromes
// Author: @manish-giri
// Challenge: http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes?solution=function%20palindrome(str)%20%7B%0A%20%20%2F%2F%20Good%20luck!%0A%20%20var%20inputStr%20%3D%20str.replace(%2F%5B%5EA-Z%5Ea-z%5E0-9%5D%2Fg%2C%20%27%27)%3B%0A%20%20inputStr%20%3D%20inputStr.trim().toLowerCase()%3B%0A%20%20return%20inputStr%20%3D%3D%20inputStr.split(%22%22).reverse().join(%22%22)%3B%0A%7D%0A%0Apalindrome(%22race%20car%22)%3B
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function palindrome(str) {
    // Good luck!
    var inputStr = str.replace(/[^A-Z^a-z^0-9]/g, '');
    inputStr = inputStr.trim().toLowerCase();
    return inputStr == inputStr.split("").reverse().join("");
}

palindrome("race car");