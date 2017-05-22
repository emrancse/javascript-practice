// Find a factorial by recursion method

function factorial(num){
  if(num === 0 || num === 1){
    return 1;
  }
  
  else{
    return num * factorial(num-1);
  }
}

var result = factorial(0);
console.log(result);