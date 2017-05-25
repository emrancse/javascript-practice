// Find the longest word from a string by sort(array method)

function findLongestWord(str){
  
  var strToArray = str.split(" ");
 
  var longestWord = strToArray.sort(function(a,b){
    
    return b.length - a.length;
  });
    
  
 return longestWord[0];
  
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));