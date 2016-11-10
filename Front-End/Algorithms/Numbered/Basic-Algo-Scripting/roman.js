function convert(num) {
  if (num > 3999) {
    return "This is not a Roman Numeral";
  }

  var stringArray = num.toString().split(""); //numbers as strings
  var numArray = [];
  var answer = "";
  var position = 0;


  for (var idx = 0; idx < stringArray.length; ++idx) {
    numArray.push(parseInt(stringArray[idx]));
  }

  for(var i = 1; i <= 4 - stringArray.length; i++) {
    numArray.unshift(false);
  }


  var symbols = {3: ["I", "V"],
                 2: ["X", "L"],
                 1: ["C", "D"],
                 0: ["M"]
                };


  while (position < 4) {
    var currentNum = numArray[position];
    if(currentNum === false || currentNum === 0) {
      answer += "";
    } else if (currentNum/5 < 1) {
      answer = answer + symbols[position][0].repeat(currentNum);
    } else if (currentNum/5 === 1) {
      answer = answer + symbols[position][1];
    } else {
      answer = answer + symbols[position][1] + symbols[position][0].repeat(currentNum-5);
    } 
    position++;
  }

  answer = answer.replace("VIIII", "IX");
  answer = answer.replace("LXXXX", "XC");
  answer = answer.replace("CCCC", "CM");

  answer = answer.replace("IIII", "IV");
  answer = answer.replace("XXXX", "XL");
  answer = answer.replace("CCCC", "CD");

  return answer;
}