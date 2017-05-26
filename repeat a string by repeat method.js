// Repeat a string by a given number with repeat method

function repeatStringByGivenNumber(str, num){
  
  if(num > 0){
     return str.repeat(num);
     
   }
  
  else{
    return "";
  }

}

console.log(repeatStringByGivenNumber("Emran",3));