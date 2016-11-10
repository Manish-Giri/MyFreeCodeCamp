//global variables and functions

var result = 0;
var entries = [];
var lastNum = 0;
var currentNum = 0; //at any point this number is in memory if no number is pressed
var currentNumDisplay = "";

var currentOp = '';
var lastOp = '';

var oldResult = '';

//to prevent multiple decimals in same number
var sameNumberDecimal = false;

//new display variables
var $previousDisplay = $("#previousDisplay");
var $presentDisplay = $("#currentDisplay");



//check number of decimals in a number
Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}

function showMessage(character, message) {
    if(character) {
        $previousDisplay.html('<i style="font-size:0.6em; color:#BADCF3">'+oldResult+"</i>");
    }
    else if(!character) {
        $previousDisplay.html("");
        $previousDisplay.html('<i style="color:red;font-size:0.5em;">' + message +"</i>");
    }
}


function resultCheck(num) {
    var answer = 0;

    //get length of number itself
    var numberLength = num.toString().length;
    console.log("Number Length = " + numberLength);

    //CASE 1 - total 15 numbers on screen
    if(numberLength <= 15) {

        //if number of digits after decimal >= 13, fix to 10
        if(num % 1 !== 0 && num.countDecimals >= 13) {
            console.log("Num of decimals = " + num.countDecimals);
            showMessage(false, "Result truncated");
            answer = num.toFixed(10);

        }
        else {
            answer = num;
        }

    }

    //CASE 2 - more than 15 numbers on screen
    else if(numberLength > 15) {

        //check if decimals exists
        if(num % 1 !== 0) {
            var decimalDigits = num.countDecimals();
            var preDecimalDigits = numberLength - decimalDigits;

            if(preDecimalDigits <= 5 && decimalDigits >= 11) {
                console.log("Inside else 1");
                showMessage(false, "Result truncated");
                answer = num.toFixed(10);
            }
            
            else if(preDecimalDigits >= 11 && decimalDigits >= 4) {
                console.log("Inside else 2");
                answer = num.toFixed(3);
            }
            else if(5 < preDecimalDigits <= 11 && decimalDigits < 4) {
                console.log("Inside else 3");
                answer = num;
            }
        }

        else {
            //no decimal places
            console.log("Inside else 4");
            showMessage(false, "Result too large");
            answer = 0;
        }


    }

    return answer;
}


function calculate(num1, op, num2) {
    var result = 0;
    if (op === "+") {
        result = resultCheck(num1 + num2);
    } else if (op === "-") {
        result = resultCheck(num1 - num2);
    } 

    else if (op === "*") {
        result = resultCheck(num1 * num2);
    } 

    else if (op === "/") {
        if (num2 !== 0) {
            result = resultCheck(num1 / num2);
        }
        else if(num2 === 0) {
            console.log("Inside divide by zero loop");
            showMessage(false, "Divide by Zero");

            //$previousDisplay.html('<i style="font-size:0.7em;color:green;">'+oldResult+"</i>");
             //$previousDisplay.html('<b style="font-size:0.5em;color:red;">'+"Invalid Operation"+"</b>");
             result = 0;
        }
    } 

    else if (op === "sqrt") {
        if (num1 >= 0) {
            result = resultCheck(Math.sqrt(num1));
        }
        else {
            showMessage(false, "Invalid Number");
            result = 0;
        }
    } 

    else if (op === "%") {
        if(num2 !== 0) {
            result = num1 % num2;
        }
        else {
            showMessage(false, "Invalid Number");
            result = 0;
        }
    }

    return result;
}


function pushOperator(oper) {
    currentOp = oper;
    entries.push(currentOp);
    console.log("----");
    console.log("Entries = " + entries);

    //changes for new displays
    showMessage(true, "");
    //$previousDisplay.html('<i style="font-size:0.7em; color:#BADCF3">'+oldResult+"</i>");
    console.log("Old Result = " + oldResult);
    //clear currentOp
    currentOp = '';

}


$(".table-cell").click(function () {
    
    var $this = $(this);

    //if button clicked was a number
    if ($this.hasClass("number")) {
        currentNum = parseInt($this.text(), 10);

        //check if last entry in entries[] is also a number
        lastNum = entries[entries.length - 1];
        if ($.isNumeric(lastNum)) {
            //number repition
            //remove last number from entries

            var lastNumS = lastNum.toString();

            //if current number is of 14 or less digits
            if(lastNumS.length <= 14) {

                var last = entries.pop();
                var lastS = last.toString();

                //get last entry in entries, combine with this number, update currentNum, currentNumDisplay and display on screen
                currentNumDisplay = lastS + currentNum;
                currentNum = parseFloat(currentNumDisplay, 10);
                
                //do same thing for old result display
                
                entries.push(currentNum);
                console.log("----");
                console.log("Entries = " + entries);
                oldResult = entries.join("");
                //oldResult = currentNumDisplay;   
                showMessage(true, "");
                //$previousDisplay.html('<i style="font-size:0.7em;color:green">'+oldResult+"</i><br>");
                $presentDisplay.html(currentNumDisplay);

               // oldResult = currentNumDisplay;   
                console.log("Old Result = " + oldResult);
            }


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
            //----------testing-----------
            oldResult = entries.join("");
            showMessage(true, "");
            //---------------------------
            //console.log("----");
            //$display.html(currentNumDisplay);
            $presentDisplay.html(currentNumDisplay);

        }


        else {
            //if last entry in entries[] is not a number, 
            //it must be an operator or a new number

            entries.push(currentNum);
            console.log("----");
            console.log("Entries = " + entries);
            //----------testing-----------
            oldResult = entries.join("");
        
            //---------------------------
            //previousDisplay.html('<i style="font-size:0.7em;color:green;">'+oldResult+"</i>");
            showMessage(true, "");
            $presentDisplay.html(currentNum);
            //oldResult += currentNum;
            console.log("Old Result = " + oldResult);
        }
    }

    //else if button clicked was an operator
    else if ($this.hasClass("op")) {

        currentOp = $this.text();
        
        oldResult += currentOp;
        console.log("Current Op => " + currentOp);

        /*----------------------------------------------------
        check if the operator was a null operator AC|CE|=
        -----------------------------------------------------*/
        if ($this.hasClass("null-op")) {
            //validation for decimal case
            sameNumberDecimal = false;
            //check if operator is an 'AC'
            if (currentOp === "AC") {
                //console.log("Inside if loop, Current Op = " + currentOp);
                //clear entries array
                entries = [];
                console.log("----");
                console.log("Entries = " + entries);
                //console.log("----");
                //clear screen display
                //$display.html("");
                $previousDisplay.html("");
                $presentDisplay.html("");

                //clear currentNum, currentOp, oldresult
                currentNum = 0;
                currentOp = '';
                oldResult = '';
            }


            //check if operator was a 'CE' 
            else if (currentOp === "CE") {
                //if last entry in entries is a number
                if ($.isNumeric(entries[entries.length - 1])) {
                    //remove last number from entries
                    entries.pop();
                    //change - don't remove last operator from entries
                    //entries.pop();
                    console.log("----");
                    console.log("Entries = " + entries);
                    //console.log("----");
                    //reset currentOp,currentNum
                    currentNum = 0;
                    currentOp = '';
                }
                //if last entry in entries was not a number
                else {
                    //last entry is an operator, but don't remove it
                    //entries.pop();
                    console.log("----");
                    console.log("Entries = " + entries);
                    //console.log("----");
                    //reset currentOp,currentNum
                    //currentNum = 0;
                    currentOp = '';

                }
            }

            //check if operator was an '='
            else if (currentOp === "=") {
                //calculate result from entries
                var temp = 0;
                oldResult = entries.join("");
                while (entries.length >= 3) {
                    temp = calculate(entries[0], entries[1], entries[2]);
                    entries.splice(0, 3, temp);
                    console.log("----");
                    console.log("Entries = " + entries);
                    console.log("----");
                }
                result = temp;
                //$display.html(result);
               // $previousDisplay.html("");
                //showMessage(true,"");
                $presentDisplay.html(result);
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
                //validation for decimal case
                sameNumberDecimal = false;
                //check if last entry in entries was a number
                if ($.isNumeric(entries[entries.length - 1])) {
                    //if yes, get last number in entries
                    lastNum = entries[entries.length - 1];
                    //compute result of square root
                    result = calculate(lastNum, "sqrt", 0);
                    //show result on screen
                    showMessage(true,"");
                    //$previousDisplay.html('<i style="font-size:0.7em;color:green">'+oldResult+"</i><br>");
                    $presentDisplay.html(result);
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
                //check if last entry in entries was a number - only valid case
                if ($.isNumeric(entries[entries.length - 1])) {
                    console.log("Samenumberdecimal = " + sameNumberDecimal);
                    if(!sameNumberDecimal) {
                        sameNumberDecimal = true;
                        entries.push(".");                     
                    }
                    else {
                    }
                }

                //else - last entry in entries is not a number - ignore

            }
        }

        /*---------------------------------------------------------
          check if the operator was a binary operator - +|-|*|/|%
        ---------------------------------------------------------*/
        else if ($this.hasClass("binary-op")) {
            
            //validation for decimal case
            sameNumberDecimal = false;

            //check if last entry in entries is a number

            if ($.isNumeric(entries[entries.length - 1])) {
                //get what operator was pushed
                if ($this.is("#add")) {
                    //if operator is +
                    pushOperator("+");
                }

                //if operator is '-' 
                else if ($this.is("#subtract")) {
                    //if operator is +
                    pushOperator("-");
                }

                //if operator is '*'
                else if ($this.is("#multiply")) {
                    //if operator is +
                    pushOperator("*");
   
                }

                //if operator is '/'
                else if ($this.is("#divide")) {
                    //if operator is +
                    pushOperator("/");
                } 

                else if ($this.is("#percent")) {
                    //if operator is +
                    pushOperator("%");
                }


            }

            //else last entry in entries is not a number
            else {

                //last entry is an operator, pop it
                lastOp = entries.pop();
                 if ($this.is("#add")) {
                    //if operator is +
                    pushOperator("+");
                }

                //if operator is '-' 
                else if ($this.is("#subtract")) {
                    //if operator is -
                    //CHANGES for negative numbers
                    if(!entries.toString().length) {
                        //if entries is emtpy
                        entries.push(0);
                        pushOperator("-");
                    }
                    else {
                        pushOperator("-");
                    }
                }

                //if operator is '*'
                else if ($this.is("#multiply")) {
                    //if operator is +
                    pushOperator("*");
   
                }

                //if operator is '/'
                else if ($this.is("#divide")) {
                    //if operator is +
                    pushOperator("/");
                } 

                else if ($this.is("#percent")) {
                    //if operator is +
                    pushOperator("%");
                }

                // if ($this.is("#add")) {
                //     //if operator is +
                //     currentOp = '+';
                //     entries.push(currentOp);
                //     console.log("----");
                //     console.log("Entries = " + entries);

                //     //changes for new displays
                //     //$previousDisplay.html('<i style="font-size:0.7em; color:green">'+oldResult+"</i>");
                //     console.log("Old Result = " + oldResult);
                //     //clear currentOp
                //     currentOp = '';
                // }


            }

        }
    }




});
