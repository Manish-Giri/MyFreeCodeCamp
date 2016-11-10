/**
 * Created by manishgiri on 8/4/16.
 */
// Make a Person
// Fill in the object constructor with the following methods below:
//
//     getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
//
//     The methods that take an argument must accept only one argument and it has to be a string.
//
//     These methods must be the only available means of interacting with the object.
//
//     Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
//     Here are some helpful links:
//
//     Closures
// Details of the Object Model
// Run tests (ctrl + enter)
// Reset	  Help	  Bug
//
// ​
//
// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
//     bob.firstName should return undefined.
//     bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")

var Person = function(firstAndLast) {
    var nameSplit = firstAndLast.split(" ");
    var firstName = nameSplit[0];
    var lastName = nameSplit[1];

    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return firstName + " " +  lastName;
    };

    this.setFirstName = function (fname) {
        firstName = fname;
    };

    this.setLastName = function (lname) {
        lastName = lname;
    };

    this.setFullName = function (fl) {
        firstName = fl.split(" ")[0];
        lastName = fl.split(" ")[1];
    };


    //return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
