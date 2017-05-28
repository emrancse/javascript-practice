// square root  every array element

function squareRoot(arr) {
   
    var rootedArray = arr.map(Math.sqrt);
  return rootedArray;
}

console.log(squareRoot([4, 9, 16, 25]));