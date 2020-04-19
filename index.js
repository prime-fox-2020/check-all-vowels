function checkAllVowels(str){
    let vowel ='aiueo';
    let count = 0;

    for(let i = 0; i< str.length; i++){
        for(let j= 0;j<vowel.length; j++){
            if(str[i] == vowel[j]){
                count++;
            }
        }
    }
    if(count === str.length){
        return true
    }else{
        return false
    }
}

//test case
console.log(checkAllVowels('aiueo')) //true
console.log(checkAllVowels('kjlmnqaiueo')) //false
console.log(checkAllVowels('nfdtphjx')) //false
