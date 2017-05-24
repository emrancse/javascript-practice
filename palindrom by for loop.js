// Find a palindrome by for loop

function palindrome(str){
  var reg = /[^A-Za-z0-9]/g;
  var newStr = str.toLowerCase().replace(reg, "");
  var len = newStr.length;
  
  for(var i=0; i<=len/2; i++){
    if(newStr[i] !== newStr[len-1-i]){
      return "It is not palindrome";
    }
  }
  
  return "It is palindrome";
}

console.log(palindrome("eye"));