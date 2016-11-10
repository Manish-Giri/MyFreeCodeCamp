"use strict";

/**
 * Created by manishgiri on 8/5/16.
 */
//my implementation of Heap's algorithm - https://en.wikipedia.org/wiki/Heap%27s_algorithm

var perms = [];

function swap(array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}

function heapify(arr, n) {
    n = n || arr.length;
    if (n === 1) {
        console.log(arr);
        perms.push(arr.join(''));

        console.log("--------------");
        $("body").append(arr);
        $("body").append("<hr>");
    } else {
        for (var i = 1; i <= n; i++) {

            heapify(arr, n - 1);
            //logic to swap based on heap's algo
            //if n is odd - switch first and last
            if (n % 2) {
                var j = 1;
            } else {
                //if n is even, switch i and last
                var j = i;
            }

            swap(arr, j - 1, n - 1);
        }
    }

    console.log("Final = " + perms);
}

//heapify(['a', 'b', 'c']);
heapify(['a', 'a', 'b']);

function noRepeat(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].match(new RegExp("([a-z])\\1")) === null) {
            result++;
        }
    }
    console.log("Match = " + result);
    return result;
}

noRepeat(perms);

//# sourceMappingURL=heap-compiled.js.map