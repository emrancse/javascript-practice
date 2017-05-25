// Capitalize every word of a string by map() and replace() method

function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(" ");
}
console.log(titleCase("I'm a little tea pot"));