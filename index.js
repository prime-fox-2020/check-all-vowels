function checkVowels(str){
    let cek ='aeiou'
    let count = 0
    for(var i =0; i< str.length; i++){
        for(var j=0;j<cek.length; j++){
            if(str[i] == cek[j]){
                count++
            }
        }
    }
    if(count == str.length){
        return true 
    }else{
        return false
    }
}

console.log(checkVowels('aeoiou'))
console.log(checkVowels('kjlmnq'))
console.log(checkVowels('abcdefg'))