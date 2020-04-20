function checkAllVowels(str) {
  var vowels = 'aiueo'
  var temp = ''

  for(let i = 0; i < str.length; i++) {
      for(let j = 0; j < vowels.length; j++) {
          if(str[i] == vowels[j]) {
              temp += str[i]
          }
      }
  }
  console.log(temp);
  console.log(str.length);

  if(temp.length == str.length) {
      return true
  } else {
      return false
  }
}

console.log(checkAllVowels('abcdefghijklmnopqrstuvwxyz'))
console.log(checkAllVowels('bcdfghjklmnpqrstvwxyz'))
console.log(checkAllVowels('jlksdjfs'))
console.log(checkAllVowels('aiueoo'))
console.log(checkAllVowels('oeuia'))
console.log(checkAllVowels('aaaaaaaaaaaaaaaaaaaaaaaaaaaaab'))
