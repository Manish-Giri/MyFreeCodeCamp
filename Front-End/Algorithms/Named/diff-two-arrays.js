function diff(arr1, arr2) {
  var merged = arr1.concat(arr2);
  
  // Same, same; but different.
  var newArr = merged.filter(function(val) {return (arr1.indexOf(val) == -1 || arr2.indexOf(val) == -1);});
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
