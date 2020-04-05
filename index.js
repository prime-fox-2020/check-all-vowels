function checkAllVowel(str){
    const vowels = 'aiueo'
    let lowerStr = str.toLowerCase()
    let counter = 0

    for(let i = 0; i<str.length; i++){
        for (let j = 0; j<vowels.length; j++){
            if (lowerStr[i] === vowels[j]){
                counter+=1
            }
        }
    }
    if (counter === str.length){
        return true
    } else {
        return false
    }
}

console.log(checkAllVowel('AAAIAIIIU'))
console.log(checkAllVowel('AJIEKOIU'))
console.log(checkAllVowel('SURABAYA'))
