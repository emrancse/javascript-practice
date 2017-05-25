// Find the longest word from a string by reduce() array method

function findLongestWord(str){
  
  var strToArray = str.split(" ");
 
  var longestWord = strToArray.reduce(function(longest, currentWord){
    
    if(currentWord.length > longest.length){
      return currentWord;
    }
    
    else{
      return longest;
    }
    
  }, "");
    
  
 return longestWord;
  
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));