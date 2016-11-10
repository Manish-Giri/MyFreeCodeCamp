/**
 * Created by manishgiri on 7/29/16.
 */
/*
No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

    Here are some helpful links:

    Permutations
RegExp
Run tests (ctrl + enter)
Reset	  Help	  Bug*/

/**
 * Your output will go here.
 * Any console.log() -type
 * statements will appear in
 * your browser's DevTools
 * JavaScript console as well.
 */
/*
permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("a") should return 1.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12.
*/


var perms = [];

function swap(array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
}

function heapify(arr, n) {
    n = n || arr.length;
    if(n === 1) {
        //console.log(arr);
        perms.push(arr.join(''));

    }
    else {
        for(var i = 1; i <= n ; i++) {

            heapify(arr, n-1);
            //logic to swap based on heap's algo
            //if n is odd - switch first and last
            if(n % 2) {
                var j = 1;
            }
            else {
                //if n is even, switch i and last
                var j = i;
            }

            swap(arr, j - 1, n - 1);

        }

    }

    //console.log("Final = " + perms);
}


function permAlone(str) {
    perms = []; //reset global array before start of each test
    var strLetters = str.split('');
    heapify(strLetters);
    var result = 0;
    for(let i = 0; i < perms.length; i++) {
        if(perms[i].match(new RegExp("([a-z])\\1")) === null) {
            result ++;
        }
    }

    console.log("Str = " + str + ", Match = " + result);
    console.log("--------------");
    return result;

}

permAlone('aab');
permAlone("aaa");
permAlone("aabb");
permAlone("abcdefa");
permAlone("abfdefa");
permAlone("aaabb");
