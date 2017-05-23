// reverse a string by while loop

function reverseString(str){
  var newString = "";
  var len = str.length-1;
  
  while(len>=0){
    newString +=str[len];
    len--;
  }
  
  return newString;
}

console.log(reverseString("work"));