
function checkVowels(str){
const vowels = 'aeiou'
let counter = 0;


for(let i = 0; i < str.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(str[i].toLowerCase() === vowels[j]){
      counter++
    }
  }
}

if(counter === str.length){
  return true;
}else{
  return false;
}
}


console.log(checkVowels('oooo'))
console.log(checkVowels('adkfndoknei'))