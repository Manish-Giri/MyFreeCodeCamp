/*Waypoint: Join Strings with join
We can use the join method to join each element of an array into a string separated by whatever delimiter you provide as an argument.

The following is an example of using join to join all of the elements of an array into a string with all the elements separated by word `Na`:

var joinMe = ["Na ", "Na ", "Na ", "Na ", "Batman!"];

var joinedString = joinMe.join("Na ");

console.log(joinedString);

Use the join method to create a string from joinMe with spaces in between each element and assign it to joinedString.*/

var joinMe = ["Split","me","into","an","array"];

// Only change code below this line.

var joinedString = joinMe.join(" ");

// Only change code above this line.

(function() {return joinedString;})();
