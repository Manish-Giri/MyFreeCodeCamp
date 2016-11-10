function binaryAgent(str) {
  var nums = [];
	var binaries = str.split(" ");
	for(var i = 0; i < binaries.length; i++) {
		nums.push(parseInt(binaries[i], 2));
	}
	console.log(nums);
	return String.fromCharCode(...nums);
  //return String.fromCharCode(str);
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
