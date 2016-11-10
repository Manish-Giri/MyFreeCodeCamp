function every(collection, pre) {
  // Is everyone being true?
  for(var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    if(!obj.hasOwnProperty(pre)) {
      return false;
    }
    for(var prop in obj) {
      if(!obj[prop]) {
        return false;
      }
    }
  }
  return true;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
