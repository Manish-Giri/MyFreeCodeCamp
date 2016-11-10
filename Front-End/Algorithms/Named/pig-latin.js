function translate(str) {
  	var firstLetter = str.charAt(0);
	if(firstLetter === 'a' || firstLetter === 'e' ||firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u'){
		return str.concat("way");
	}
	else {
		var words = str.split("");
		var pos = 0;
		for(var i = 0; i < words.length; i++) {
			if(words[i] === 'a' || words[i] === 'e' ||words[i] === 'i' || words[i] === 'o' || words[i] === 'u'){
				pos = i;
				break;
			}
		}

		var letters = str.substr(0, pos);
		//console.log(str.substring(pos).concat(letters).concat("ay"));
		return str.substring(pos).concat(letters).concat("ay");
	}
 return str;
}

translate("consonant");
