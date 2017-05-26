// Repeat a string by a given number

function repeatStringByGivenNumber(str, num){
   var repeatString = "";
   while(num > 0){
     
     repeatString += str;
     num--; 
   }

   return repeatString;
}

console.log(repeatStringByGivenNumber("Emran",3));