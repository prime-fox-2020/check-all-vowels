function checkVowels(x){
    let vowels = ['a','i','u','e','o']
    let check;
    for(let i = 0 ;i < vowels.length ; i++){
        if(x == vowels[i]){
            check=true
        } 
    }
    return check
}

function checkAllVowel (str){
    let count = 0
    str = str.toLowerCase()

    for(let i = 0 ;i < str.length ; i++){
        if(checkVowels(str[i])==true){
            count++
        }
    }

    if(count == str.length){
        return true
    }else{
        return false
    }

}

console.log(checkAllVowel('AauIUEO'))
console.log(checkAllVowel('AKYEO'))
console.log(checkAllVowel('YibUYurYTIB1927&(@*89AE'))
console.log(checkAllVowel('AAAAAAAAAAAAAAAAAIIIIIIIIIIIIUUUUUUUUEO'))