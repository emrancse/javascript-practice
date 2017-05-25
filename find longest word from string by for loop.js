// Find the longest Word from a given string

function findLongestWord(str) {
  var strSplitArray = str.split(" ");
  var longestWord = 0;
  var finalWord = "";
  var len = strSplitArray.length;
  
  for(var i = 0; i < len; i++){
    if(strSplitArray[i].length > longestWord){
      
	longestWord = strSplitArray[i].length;
    finalWord = strSplitArray[i];  
     }
  }
  return finalWord;
}


console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));