// Bonfire: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Array.indexOf()
// Array.push()
// Array.join()
// String.substr()
// String.split()
//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug

// /**
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
//   */

// translate("california") should return "aliforniacay".
// translate("paragraphs") should return "aragraphspay".
// translate("glove") should return "oveglay".
// translate("algorithm") should return "algorithmway".
// translate("eight") should return "eightway".

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
//translate("algorithm");
