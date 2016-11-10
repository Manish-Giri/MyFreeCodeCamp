function chunk(arr, size) {
  // Break it up.
  var multiArr = [];
  var n = 0;
  while(n < arr.length) {
    multiArr.push(arr.slice(n, n+size));
    n += size;
  }
 
  return multiArr;
}

chunk(["a", "b", "c", "d"], 2);
