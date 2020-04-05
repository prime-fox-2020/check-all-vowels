

function apakahVokalSemua(str){
  let kamus = 'AIUEOaiueo'

  var res = 0
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < kamus.length; j++){
      if (str[i] == kamus[j]){
        res += 1
      }
    }
  }
  if (res == str.length){
    return true
  } else 
    return false
}

console.log(apakahVokalSemua('AUEOEUIO'));
console.log(apakahVokalSemua('JAKARTA'));
console.log(apakahVokalSemua('AIOEUER'));
