function unite(arr1, arr2, arr3) {
  	var combinedArgs = [];
	for(var i = 0; i < arguments.length; i++) {
		combinedArgs.push(arguments[i]);
	}

	console.log(combinedArgs);
	var result = [];
	for( i = 0; i < combinedArgs.length; i++) {
		combinedArgs[i].forEach(function(val) {
			if(! result.includes(val)) {
				result.push(val);
			}
		});
	}
	console.log(result);
  return result;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);