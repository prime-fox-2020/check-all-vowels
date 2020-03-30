function checkVowel(string) {
    var vokal = 'aiueo'
    var temp = ''

    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < vokal.length; j++) {
            if(string[i] == vokal[j]) {
                temp += string[i]
            }
        }
    }

    if(temp.length == string.length) {
        return true
    } else {
        return false
    }
}

console.log(checkVowel('rinotoharto'));
console.log(checkVowel('rabsnckksola'));
console.log(checkVowel('aiueoaiueoaiuoe'));
console.log(checkVowel('aaaaaaaaaaadaaaa'))