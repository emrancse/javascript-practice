// Confirm the word ends with a given string by endsWith() method

function confirmEnding(string, target) {
  if(string.endsWith(target) === true){
  return " Yes, this " + string + " word ends with " + target; 
  }
  
  else{
    return "No, this " + string + " word doesnot end with " +target;
  }
}
console.log(confirmEnding('Bastian', 'n'));