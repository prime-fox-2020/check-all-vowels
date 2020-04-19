function checkVowel(str){
    let vowel = "AEIUOaeiuo"
    for (let i = 0; i < str.length; i++) {
        if(vowel.indexOf(str[i]) == -1){
            return false
        }
    }
    return true
}

console.log(checkVowel("aeuio"))
console.log(checkVowel("aesio"))
console.log(checkVowel("ayuio"))
console.log(checkVowel("qwrty"))