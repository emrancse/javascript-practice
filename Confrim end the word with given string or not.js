// Confirm the word end with given string 

function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return "Yes, this " + string + " word ends with " + target;
  } else {
    return "No, this " + string + " word doesnot ends with " + target;
  }
}
console.log(confirmEnding('Bastian', 'n'));