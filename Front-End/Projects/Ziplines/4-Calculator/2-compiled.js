"use strict";

//global variables and functions
var $display = $("#calculator-display");
var result = 0;
var entries = [];
var lastNum = 0;
var currentNum = 0; //at any point this number is in memory if no number is pressed
var currentNumDisplay = "";
var currentOp = '';
var periodicNumber = [];
var decimals = [];

function decimalCheck(num) {
    var answer = 0;
    if (num % 1 !== 0) {
        answer = num.toFixed(10);
    } else {
        answer = num;
    }

    return answer;
}

function calculate(num1, op, num2) {
    var result,
        temp = 0;
    if (op === "+") {
        result = decimalCheck(num1 + num2);
    } else if (op === "-") {
        result = decimalCheck(num1 - num2);
    } else if (op === "*") {
        result = decimalCheck(num1 * num2);
    } else if (op === "/") {
        if (num2 !== 0) {
            result = decimalCheck(num1 / num2);
        }
    } else if (op === "sqrt") {
        if (num1 >= 0) {
            result = decimalCheck(Math.sqrt(num1));
        }
    } else if (op === "%") {
        result = num1 % num2;
    }

    return result;
}

$(".table-cell").click(function () {
    //$display.html($(this).text());
    var $this = $(this);

    //if button clicked was a number
    if ($this.hasClass("number")) {
        currentNum = parseInt($this.text(), 10);

        //check if last entry in entries[] is also a number
        if ($.isNumeric(entries[entries.length - 1])) {
            //remove last number from entries
            lastNum = entries.pop();

            //get last entry in entries, combine with this number, update currentNum, currentNumDisplay and display on screen
            currentNumDisplay = lastNum.toString() + currentNum;
            currentNum = parseFloat(currentNumDisplay, 10);
            entries.push(currentNum);
            console.log("----");
            console.log("Entries = " + entries);
            console.log("----");
            $display.html(currentNumDisplay);
        }

        //check if last entry in entries[] is "."
        else if (entries[entries.length - 1] == ".") {
                //last entry in entries is a dot
                //remove '.'
                entries.pop();
                //remove last number in entries
                lastNum = entries.pop();
                //prepare formatted number
                currentNumDisplay = lastNum + "." + currentNum;
                //get formatted number to store in entries
                currentNum = parseFloat(currentNumDisplay, 10);
                entries.push(currentNum);
                console.log("----");
                console.log("Entries = " + entries);
                console.log("----");
                $display.html(currentNumDisplay);
            }

            //check if last entry in entries[] is ".."
            else if (entries[entries.length - 1] == "..") {
                    //remove ".." from entries
                    entries.pop();
                    lastNum = 0;
                    currentNumDisplay = lastNum + "." + currentNum;
                    currentNum = parseFloat(currentNumDisplay);
                    entries.push(currentNum);
                    console.log("----");
                    console.log("Entries = " + entries);
                    console.log("----");
                    $display.html(currentNumDisplay);
                } else {
                    //if last entry in entries[] is not a number, it must be an operator
                    entries.push(currentNum);
                    console.log("----");
                    console.log("Entries = " + entries);
                    console.log("----");
                    $display.html(currentNum);
                }
    }

    //else if button clicked was an operator
    else if ($this.hasClass("op")) {

            currentOp = $this.text();
            console.log("Current Op => " + currentOp);

            /*----------------------------------------------------
            check if the operator was a null operator AC|CE|=
            -----------------------------------------------------*/
            if ($this.hasClass("null-op")) {

                //check if operator was an 'AC'
                if (currentOp === "AC") {
                    //console.log("Inside if loop, Current Op = " + currentOp);
                    //clear entries array
                    entries = [];
                    console.log("----");
                    console.log("Entries = " + entries);
                    console.log("----");
                    //clear screen display
                    $display.html("");
                    //clear currentNum, currentOp
                    currentNum = 0;
                    currentOp = '';
                }

                //check if operator was a 'CE' 
                else if (currentOp === "CE") {
                        //if last entry in entries is a number
                        if ($.isNumeric(entries[entries.length - 1])) {
                            //remove last number from entries
                            entries.pop();
                            //also remove last operator from entries
                            entries.pop();
                            console.log("----");
                            console.log("Entries = " + entries);
                            console.log("----");
                            //reset currentOp,currentNum
                            currentNum = 0;
                            currentOp = '';
                        }
                        //if last entry in entries was not a number
                        else {
                                //last entry is an operator, remove it
                                entries.pop();
                                console.log("----");
                                console.log("Entries = " + entries);
                                console.log("----");
                                //reset currentOp,currentNum
                                currentNum = 0;
                                currentOp = '';
                            }
                    }

                    //check if operator was an '='
                    else if (currentOp === "=") {
                            //calculate result from entries
                            var temp = 0;
                            while (entries.length >= 3) {
                                temp = calculate(entries[0], entries[1], entries[2]);
                                entries.splice(0, 3, temp);
                                console.log("----");
                                console.log("Entries = " + entries);
                                console.log("----");
                            }
                            result = temp;
                            $display.html(result);
                            //reset entries & current op
                            currentOp = '';
                            entries = [];
                            console.log("Entries = " + entries);
                        }
            }

            /*----------------------------------------------------
              check if operator was a unary operator SQRT|.
            -----------------------------------------------------*/
            else if ($this.hasClass("unary-op")) {

                    //check if operator was a sqrt
                    if ($this.hasClass("sqrt")) {
                        //check if last entry in entries was a number
                        if ($.isNumeric(entries[entries.length - 1])) {
                            //if yes, get last number in entries
                            lastNum = entries[entries.length - 1];
                            //compute result of square root
                            result = calculate(lastNum, "sqrt", 0);
                            //show result on screen
                            $display.html(result);
                            //reset everything
                            entries = [];
                            currentOp = '';
                        }

                        //if last entry was not a number
                        else {
                                //discard the value of sqrt
                                currentOp = '';
                            }
                    }

                    //check if operator was a dot
                    else if ($this.hasClass("dot")) {
                            //check if last entry in entries was a number
                            if ($.isNumeric(entries[entries.length - 1])) {
                                entries.push(".");
                            }

                            //last entry in entries is not a number
                            else {
                                    entries.push("..");
                                }
                        }
                }

                /*---------------------------------------------------------
                  check if the operator was a binary operator - +|-|*|/|%
                ---------------------------------------------------------*/
                else if ($this.hasClass("binary-op")) {
                        //check if last entry in entries is a number
                        if ($.isNumeric(entries[entries.length - 1])) {
                            //get what operator was pushed
                            if ($this.is("#add")) {
                                //if operator is +
                                currentOp = '+';
                                entries.push(currentOp);
                                console.log("----");
                                console.log("Entries = " + entries);
                                console.log("----");
                                //clear currentOp
                                currentOp = '';
                            }

                            //if operator is '-' 
                            else if ($this.is("#subtract")) {
                                    //if operator is +
                                    currentOp = '-';
                                    entries.push(currentOp);
                                    console.log("----");
                                    console.log("Entries = " + entries);
                                    console.log("----");
                                    //clear currentOp
                                    currentOp = '';
                                }

                                //if operator is '*'
                                else if ($this.is("#multiply")) {
                                        //if operator is +
                                        currentOp = '*';
                                        entries.push(currentOp);
                                        console.log("----");
                                        console.log("Entries = " + entries);
                                        console.log("----");
                                        //clear currentOp
                                        currentOp = '';
                                    }

                                    //if operator is '/'
                                    else if ($this.is("#divide")) {
                                            //if operator is +
                                            currentOp = '/';
                                            entries.push(currentOp);
                                            console.log("----");
                                            console.log("Entries = " + entries);
                                            console.log("----");
                                            //clear currentOp
                                            currentOp = '';
                                        } else if ($this.is("#percent")) {
                                            //if operator is +
                                            currentOp = '%';
                                            entries.push(currentOp);
                                            console.log("----");
                                            console.log("Entries = " + entries);
                                            console.log("----");
                                            //clear currentOp
                                            currentOp = '';
                                        }
                        }
                    }
        }
});

//# sourceMappingURL=2-compiled.js.map