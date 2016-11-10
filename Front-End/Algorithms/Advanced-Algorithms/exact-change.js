/**
 * Created by manishgiri on 7/26/16.
 */
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
//     cid is a 2D array listing available currency.
//
//     Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
//
//     Otherwise, return change in coin and bills, sorted in highest to lowest order.
//
//     Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//


//create a drawer object that will hold currency & amount in drawer
var drawer = {};

var currencyArray = [
    ["ONE HUNDRED", 100.00], ["TWENTY", 20.00], ["TEN", 10.00], ["FIVE", 5.00], ["ONE", 1.00], ["QUARTER", 0.25],
    ["DIME", 0.10], ["NICKEL", 0.05], ["PENNY", 0.01]
];

/**
 * given a cash amount, find and return the largest available currency that can be used to return the change
 * @param cash
 * @returns {*}
 */
function findLargestCurrency(cash){
    var largestCurrency = "";
    for(let i = 0; i < currencyArray.length; i++) {
        if(currencyArray[i][1] > cash) {
            continue;
        }
        if(cash >= currencyArray[i][1]) {
            largestCurrency = currencyArray[i][0];
            return largestCurrency;

        }
    }
    return largestCurrency;

}

/**
 * Given a currency, return the amount of that currency available in drawer
 * @param currency
 */
function amountAvailable(currency) {
    var amount = 0;
    for(let prop in drawer) {
        if(prop === currency) {
            amount = drawer[prop];
        }
    }
    return amount;

}


/**
 * Given a currency, it's available amount and total change to return, find out how much
 * of cash of that currency you can use
 * @param available
 * @param price
 * @param currency
 * @returns {number}
 */

function amountOfCurrencyToUse(available, price, currency) {
    let amountOfCurrencyUsed = 0;

    while(price >= currency && available >= currency) {

        amountOfCurrencyUsed += currency;
        price -= currency;
        // if(currency === 0.01) {
        //     price = Math.round(price);
        // }
        //available -= amountOfCurrencyUsed;
        price = Math.round(price * 100) / 100;
        available -= currency;
        available = Math.round(available * 100) / 100;
    }

    if(price === 0 && available === 0) {
        return "Closed";
    }

    if(available < currency && currency == 0.01) {
        return "Insufficient Funds";
    }



    return amountOfCurrencyUsed;
}


function checkCashRegister(price, cash, cid) {
    var change;
    // Here is your change, ma'am.
    //step 1 - find difference between price n cash
    var difference = cash - price;

    //step 2 - find largest usable currency
    var largestCurr = findLargestCurrency(difference);
    console.log("Largest currency " + largestCurr);

    //fill up the drawer object
    for(let i = 0; i < cid.length; i++) {
        drawer[cid[i][0]] = cid[i][1];
    }
    console.log(drawer);

    //console.log("Total amount in drawer = " + cashInDrawer());

    var amountOfLargestCurrency = amountAvailable(largestCurr);

    //find position of largest currency in currencyArray
    var largestCurrencyPos = 0;
    for(let i = 0; i < currencyArray.length; i++) {
        if(largestCurr === currencyArray[i][0]) {
            largestCurrencyPos = i;
            break;
        }
    }

    console.log("Largest currency " + largestCurr + " is at position " + largestCurrencyPos + " in currencyArr");
    change = [];
    for(let i = largestCurrencyPos; i < currencyArray.length; i++) {
        largestCurr = currencyArray[i][0];
        amountOfLargestCurrency = amountAvailable(largestCurr);

        //largest currency is not sufficient -
        //get amount added through current currency, subtract from cash to return and add to change
        let amountToUse = amountOfCurrencyToUse(amountOfLargestCurrency, difference, currencyArray[i][1]);

        if(amountToUse === "Closed") {
            change = "Closed";
        }

        if(amountToUse === "Insufficient Funds") {
            change = "Insufficient Funds";
        }

        else if(typeof amountToUse !== "string" && amountToUse !== 0) {
            let tempArr = [];
            tempArr.push(largestCurr);
            tempArr.push(amountToUse);
            change.push(tempArr);
            difference -= amountToUse;
        }

    }

    console.log("FINAL RESULT = " + change);
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
