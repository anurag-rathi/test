function countColorPairs(arr, n) {
  var count = 0;

  // only sort array when the given array is not sorted.
  //in case it is not sorted that's why sort is used

  arr.sort();
  for (var i = 0; i < n - 1; ) {
    if (arr[i] == arr[i + 1]) {
      count++;
      i = i + 2;
    } else {
      i++;
    }
  }
  return count;
}

var arr = [10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40];
var n = arr.length;
countColorPairs(arr, n);
