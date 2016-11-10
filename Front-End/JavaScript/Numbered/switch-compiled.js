"use strict";

// Waypoint: Selecting from many options with Switch Statements
// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which defines various possible values. Statements are executed from the first matched case value until a break is encountered.

// Here is a pseudocode example:

// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   case valueN:
//     statementN;
//     break;
// }
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

// Instructions
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// myTest(1) should have a value of "alpha"
// myTest(2) should have a value of "beta"
// myTest(3) should have a value of "gamma"
// myTest(4) should have a value of "delta"
// You should not use any if or else statements
// You should have at least 3 break statements
function myTest(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";break;
    case 2:
      answer = "beta";break;
    case 3:
      answer = "gamma";break;
    case 4:
      answer = "delta";break;
  }

  // Only change code above this line  
  return answer;
}

// Change this value to test
myTest(1);

function myTest(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 'a':
      answer = "apple";break;
    case 'b':
      answer = "bird";break;
    case 'c':
      answer = "cat";break;
    default:
      answer = "stuff";break;
  }

  // Only change code above this line  
  return answer;
}

// Change this value to test
myTest(1);

function myTest(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line  
  return answer;
}

// Change this value to test
myTest(1);

function myTest(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";break;
    case 42:
      answer = "The Answer";break;
    case 1:
      answer = "There is no #1";break;
    case 99:
      answer = "Missed me by this much!";break;
    case 7:
      answer = "Ate Nine";

  }

  // Only change code above this line  
  return answer;
}

// Change this value to test
myTest(7);

//# sourceMappingURL=switch-compiled.js.map