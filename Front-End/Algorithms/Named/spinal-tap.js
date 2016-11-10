function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
 
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
