function myReplace(str, before, after) {
	var words = str.split(" ");
	var wordPos = words.indexOf(before);
	console.log("Original sentence = " + str);
	console.log("Before pos = " + wordPos);
	var firstLetter = words[wordPos].charAt(0);
	var newWord = '';
	if(firstLetter === words[wordPos].charAt(0).toUpperCase()){
		newWord = after.charAt(0).toUpperCase() + after.substring(1);
	}
	else if(firstLetter === words[wordPos].charAt(0).toLowerCase()) {
		newWord = after.charAt(0).toLowerCase() + after.substring(1);
	}
    words.splice(wordPos, 1, newWord);
    var newStr = words.join(" ");
    return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
