function where(collection, source) {
  var arr = [];
   // What's in a name?

   for(var i = 0; i < collection.length; i++) {
    var currentObj = collection[i];
    var count = 0;
    for(var prop in source) {
      if(currentObj.hasOwnProperty(prop) && currentObj[prop] == source[prop]) {
        count++;
      }
    }
    if(count == Object.keys(source).length) {
      arr.push(currentObj);
    }
  }	
  // What's in a name?
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
