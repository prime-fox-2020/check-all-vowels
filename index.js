function checkVowel(str){
    let vowel = 'aiueo'
    let flag = false
    for(let i = 0; i < vowel.length; i++){
        flag = false
        for(let j = 0; j < str.length; j++){
            if(vowel[i] == str[j]){
                flag = true
            }
        }
        if(!flag){
            break
        }
    }
    return flag
}
console.log(checkVowel('aiueo')) // true
console.log(checkVowel('adfghjuklmikjkjemlkjhdo')) //true
console.log(checkVowel('baneikk')) //false