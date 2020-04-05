let vokal='aeiou'

function check(kalimat){
    for (let i = 0; i < kalimat.length; i++) {
        for (let j = 0; j < vokal.length; j++) {
            if(kalimat[i]==vokal[j]){
                return true
            }
        }
    }
    return false
}

console.log(check('sdqccaaa')) //true
console.log(check('aiueo')) // true
console.log(check('hjgnvyd')); // false