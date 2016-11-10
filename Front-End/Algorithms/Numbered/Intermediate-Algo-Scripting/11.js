
// Bonfire: Convert HTML Entities
// Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.
 
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 
// Here are some helpful links:
 
// RegExp
// HTML Entities
//   Run tests (ctrl + enter)
//   Reset    Help    Bug
 
// *
//   * Your output will go here.
//   * Console.log() -type statements
//   * will appear in your browser's
//   * DevTools JavaScript console.
   
 
// convert("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convert("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convert("Sixty > twelve") should return Sixty &​gt; twelve.
// convert('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convert("Shindler's List") should return Shindler&​apos;s List.
// convert("<>") should return &​lt;&​gt;.
// convert("abc") should return abc.
 
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