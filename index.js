function checkAllVowels(string){
  const dictionary = 'aiueoAIUEO'
  for(let str of string){
    for(let dict of dictionary){
      if(str === dict) return true
    }
  }
  return false
}

console.log(checkAllVowels('Hello World'))
console.log(checkAllVowels('CB DRMN'))