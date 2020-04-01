
function checkAllVowels(str){
    const vowels = 'AIUEOaiueo'
    const konsonanKecil = 'aiueo'
    for (let i = 0; i < str.length; i++) {
        var cek = false;
        for (let j  = 0; j < vowels.length; j++) {
            if(str[i]==vowels[j]){
                cek = true
            }
        }
        if(cek==false){
            return cek
        }
    }
    return cek
}


console.log(checkAllVowels('AiueiEiouoi')) // true
console.log(checkAllVowels('aaeutyksmhJ')) // false
console.log(checkAllVowels('AkuSukaMakan')) // false
console.log(checkAllVowels('AUIEUEIUEA')) // true
console.log(checkAllVowels('aeieuiuiao')) // true