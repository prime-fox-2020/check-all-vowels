function checkAllVowels(str) {

    const vowels = 'aiueoAIUEO'
    let counter = 0
    
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(str[i] == vowels[j]){
                counter++
            }
        }
    }

    return str.length === counter
}

// test case
console.log(checkAllVowels('aiueo'))
console.log(checkAllVowels('fadhlan'))
console.log(checkAllVowels('plkjh'))
console.log(checkAllVowels('ccccc'))
console.log(checkAllVowels('aaaaa'))