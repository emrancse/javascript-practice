// Capitalize the every word of a string by map method

function titleCase(str) {
  var newString = str.toLowerCase().split(" ");
  titleCaseString = newString.map(function(word){
    return (word.charAt(0).toUpperCase() + word.slice(1));
  });
  
  return titleCaseString.join(" ");
}


console.log(titleCase("I'm a little tea pot"));