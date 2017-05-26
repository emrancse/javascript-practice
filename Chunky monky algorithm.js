// Chunky Monkey algorithom

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var group = [];
   while (arr.length > 0) {
     group.push(arr.splice(0, size));
   }
   return group;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));