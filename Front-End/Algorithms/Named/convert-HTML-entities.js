function convert(str) {
  // &colon;&rpar;
   var chars = ['&', '<', '>', '"', "'"];
  var entities =["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  console.log(chars);
  console.log(entities);
  var letters = str.split("");
  for(var i = 0; i < letters.length; i++) {
    for(var j = 0; j < chars.length; j++) {
      if (letters[i] == chars[j])  {
        letters[i] = entities[j];
      }
    }
  }
  console.log(letters.join(""));
  return letters.join("");
}

convert("Dolce & Gabbana");
