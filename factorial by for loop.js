
// Find a factorial by for loop

function factorial(num){
  if(num === 0 || num ===1){
    return 1;
  }
  
  for(var i=num-1; i>=1; i--){
    num *=i;
  }
  
  return num;
}
 
var result = factorial(0);
console.log(result);