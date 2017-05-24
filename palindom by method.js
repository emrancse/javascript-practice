function palindrom(str){

     var reg = /[\W_]/g;
     var lowerCaseString = str.toLowerCase().replace(reg, "");
     var reverseString = lowerCaseString.split("").reverse().join("");

     return reverseString === lowerCaseString;
}

var isPalindromTrue = palindrome("A man, a plan, a canal. Panama");
