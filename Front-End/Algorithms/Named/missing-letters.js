function fearNotLetter(str) {
  
  	var letters = str.split("");
	var letterCode = [];
	for(var i = 0; i < letters.length; i++) {
		letterCode.push(letters[i].charCodeAt(0));
	}
	console.log(letterCode);
	var start = letterCode[0];
	var resPos = 0;
	for(i = 1; i < letterCode.length; i++) {
		if(++start != letterCode[i]) {
			resPos = start;
			break;
		}
      
	}
    
	console.log(String.fromCharCode(resPos));
    if(!resPos) {
      return undefined;
    }
	return String.fromCharCode(resPos);
}

fearNotLetter("abce");
