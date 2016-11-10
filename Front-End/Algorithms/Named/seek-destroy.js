function destroyer(arr) {
  var sArray = arguments[0];
  var filterArray = [];
  for(var i = 1; i < arguments.length; i++){
    filterArray[i-1] = arguments[i];
  }
  for(var j = 0; j < filterArray.length; j++){
    sArray = sArray.filter(function(val){
      return !(val === filterArray[j]);
    });
  }
  return sArray;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
