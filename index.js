function checkVowels(str) {
    const vowels = 'AIUEOaiueo';
    let check = false
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                return true
            }
        }
    }
    return check
}
console.log(checkVowels('asdf'))