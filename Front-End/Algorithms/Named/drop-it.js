function drop(arr, func) {
  // Drop them elements.
  
  for(var i = 0; i < arr.length; i++) {
  	if(func(arr[i])) {
  		return arr;
  	}
  	else {
  		i--;
  		arr.shift();
  	}
  }

  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
