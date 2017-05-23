// Reverse a string by for loop

function reverseString(str) {
    var newString = "";
    var len = str.length;
  for(var i =len-1; i>=0; i--){
    newString += str[i];
  }
  
  return newString;
}
console.log(reverseString("hello"));