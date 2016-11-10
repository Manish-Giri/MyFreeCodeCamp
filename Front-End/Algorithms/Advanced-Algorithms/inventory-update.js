/**
 * Created by manishgiri on 7/29/16.
 */

/*

 Inventory Update
 Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Global Array Object
 Run tests (ctrl + enter)
 Reset	  Help	  Bug

 /**
 * Your output will go here.
 * Any console.log() -type
 * statements will appear in
 * your browser's DevTools
 * JavaScript console as well.
 */

// The function updateInventory should return an array.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].

function customSort(a, b) {
    if (a[1] == b[1]) {
        return 0;
    }
    else
        return (a[1] < b[1]) ? -1 : 1;

}

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var tempArr = [];
    var matchedPositionsInArr2 = [];
    //update arr1 with matching quantities from arr2
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i][1] === arr2[j][1]) {
                arr1[i][0] = arr1[i][0] + arr2[j][0];
                matchedPositionsInArr2.push(j);

            }
        }
    }

    console.log("Updated Arr1 = " + arr1);
    var isPresent = false;
    //add new items from arr2 in arr1
    for(let i = 0; i < arr2.length; i++) {
        for(let j = 0; j < matchedPositionsInArr2.length; j++) {
            if(i === matchedPositionsInArr2[j]) {
                isPresent = true;

            }
        }

        if(!isPresent) {
            arr1.push(arr2[i]);
        }
        isPresent = false;

    }
    console.log("Arr1 + Arr2 = " + arr1);

    arr1.sort(customSort);
    console.log("Sorted arr1 = " + arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
