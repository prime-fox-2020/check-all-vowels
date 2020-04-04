// function didalam string semua huruf vokal atau tidak
// bila semua huruf vocal maka true
// bila semua bukan huruf vocal maka false
function checkVowels(str) {
    const kamus = "aiueo AIUEO"
    let check = true
    for (let i = 0; i < str.length; i++) {
        if (!kamus.includes(str[i])) {
            check = false
            return check
        }
    }
    return check
}

console.log(checkVowels("Au kSt"));
console.log(checkVowels("AiEo U"));
console.log(checkVowels("AIUeo"));
