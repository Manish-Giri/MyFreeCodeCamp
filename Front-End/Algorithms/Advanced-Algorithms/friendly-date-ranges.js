/**
 * Created by manishgiri on 8/4/16.
 */
// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
//
//     The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
//
// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.
//
//     Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.
//
//     If the range ends in the same month that it begins, do not display the ending year or month.
//
//     Examples:
//
// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
//
// makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
//
//     Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
//     Here are some helpful links:
//
//     String.prototype.split()
// String.prototype.substr()
// parseInt()
// Run tests (ctrl + enter)
// Reset	  Help	  Bug
//
// /**
//  * Your output will go here.
//  * Any console.log() -type
//  * statements will appear in
//  * your browser's DevTools
//  * JavaScript console as well.
//  */
//
// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
// makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
// makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
// makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
// makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
// makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
// makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].


//---------------------------------------------------------------------------

//object to hold month numbers -> names
var monthConverter = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};


// a and b are javascript Date objects
function dateDiffInDays(a, b) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


function ordinalizeDate(date) {
    var ordinalizedDate = "";

    if(date >= 10 && date <= 20) {
        //dates between 10 and 20 end in "th"
        ordinalizedDate = date + "th";
    }

    else if(date.toString().endsWith("1")) {
        ordinalizedDate = date + "st";
    }

    else if(date.toString().endsWith("2")) {
        ordinalizedDate = date + "nd";
    }

    else if(date.toString().endsWith("3")) {
        ordinalizedDate = date + "rd";
    }

    else {
        ordinalizedDate = date + "th";
    }

    //console.log(ordinalizedDate);
    return ordinalizedDate;
}


function makeFriendlyDates(arr) {
    var startDate = new Date(arr[0]);
    var endDate = new Date(arr[1]);
    var resultArr = [];
    var result1 = "";
    var result2 = "";


    //console.log("Date 1 = " + startDate);
    //console.log("Date 2 = " + endDate);

    var dateDifference = dateDiffInDays(startDate, endDate);
    //console.log("Date difference in days =  " + dateDifference);

    //console.log(monthConverter);
    var year1 = 0;
    var year2 = 0;
    var month1 = 0;
    var month2 = 0;
    var date1 = "";
    var date2 = "";
    var currentYear = 2016;

    date1 = ordinalizeDate(startDate.getDate());
    date2 = ordinalizeDate(endDate.getDate());
    year1 = startDate.getFullYear();
    year2 = endDate.getFullYear();
    //month1 = startDate.getMonth();
    month1 = monthConverter[startDate.getMonth()+1];
    month2 = monthConverter[endDate.getMonth()+1];
    //console.log(month1);
    //console.log(month2);


    if(month1 === month2 && year1 === year2 && date1 === date2) {
        result1 = month1 + " " + date1 + ", " + year1;
        resultArr.push(result1);
    }


    else if(dateDifference < 365) {
        //if the date range ends in less than a year from when it begins, do not display the ending year.

        //1 - start year is 2016
        if(year1 === currentYear) {

            //1.1 - end year is also 2016
            if(year2 === currentYear) {

                //case 1.1.1 - end month is same as start month
                if(month1 === month2) {
                    result1 = month1 + " " + date1;
                    result2 = date2;
                    resultArr.push(result1);
                    resultArr.push(result2);
                }

                //1.1.2 - end month is different
                else {
                    result1 = month1 + " " + date1;
                    result2 = month2 + " " + date2;
                    resultArr.push(result1);
                    resultArr.push(result2);
                }

            }

            //1.2 - end year is not 2016
            else {
                result1 = month1 + " " + date1;
                result2 = month2 + " " + date2;
                resultArr.push(result1);
                resultArr.push(result2);
            }


        }

        //2 - start year is not 2016
        else {
            if(month1 === month2) {
                result1 = month1 + " " + date1 + ", " + year1;
                resultArr.push(result1);
                result2 = month2 + " " + date2;
                resultArr.push(result2);

            }
            else {

                //months are different
                result1 = month1 + " " + date1 + ", " + year1;
                resultArr.push(result1);
                result2 = month2 + " " + date2;
                resultArr.push(result2);

            }

        }

    }

    else {

        //difference is more than 1 year

        if(year1 === currentYear) {
            //start year is 2016
            result1 = month1 + " " + date1 + ", " + year1;
            resultArr.push(result1);

            result2 = month2 + " " + date2 + ", " + year2;
            resultArr.push(result2);
        }

        else {

            //start year is not 2016
            result1 = month1 + " " + date1 + ", " + year1;
            resultArr.push(result1);

            result2 = month2 + " " + date2 + ", " + year2;
            resultArr.push(result2);
        }
    }


    console.log("Result = "  + resultArr);
    console.log("*************");

    return resultArr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
