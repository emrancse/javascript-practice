// Find the sum of all array element between a range 

function sumAll(arr) {
  var maxValue = Math.max(arr[0],arr[1]);
  var minValue = Math.min(arr[0],arr[1]);
  var result = 0;
  
  for(var i = minValue; i <= maxValue; i++){
    result += i;
  }
  
 return result;
}

console.log(sumAll([1, 3]));
