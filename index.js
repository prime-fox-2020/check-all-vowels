
function checkVowels(str) {
  var count = 0
  var dic = 'AIUEOaiueo'
  for (let i in str) {
    if (str[i] === ' ') count += 1;
    for (let j in dic) {
      if (str[i] === dic[j]) count += 1;
    }  
  } return count == str.length ? true : false
}

console.log(checkVowels("EeEO")); //true
console.log(checkVowels("Ia ioo UaAa")); //true
console.log(checkVowels("Raka Dhaneswar4")); //false