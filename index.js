let checkAllVowel = (str) => {
    let count=0
    str = str.toUpperCase()

        for(let j=0;j<str.length;j++){
            if(checkVowels(str[j])==true){
                count++
            }
    }
    return (count==str.length) ? true : false
}
let checkVowels = (x) => {
    let vowels = ['A','I','U','E','O'], check
    for(let i=0;i<vowels.length;i++){
        if(x==vowels[i]) check=true 
    }
    return (check) ? true : false
}
console.log(checkAllVowel("AAA"))