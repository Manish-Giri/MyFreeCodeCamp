function pair(str) {

  	var pair1 = ["A", "T"];
	var pair2 = ["C", "G"];
	var toPair = str.split("");
	var result = [];
	for(var i = 0; i < toPair.length; i++) {
		var arr = [];
		arr.push(toPair[i]);
		if(pair1[0] === toPair[i]) {
			arr.push(pair1[1]);
		}
		else if(pair1[1] === toPair[i]) {
			arr.push(pair1[0]);
		}

		else if(pair2[0] === toPair[i]) {
			arr.push(pair2[1]);
		}
		else if(pair2[1] === toPair[i]) {
			arr.push(pair2[0]);
		}
		result.push(arr);

	}	
	console.log(result);
 return result;
  
}

pair("GCG");
