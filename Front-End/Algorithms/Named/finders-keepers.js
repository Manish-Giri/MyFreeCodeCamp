function find(arr, func) {
  var result = arr.filter(func);
  var num = result[0];
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
