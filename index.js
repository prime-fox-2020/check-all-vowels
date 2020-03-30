let checkVowels = (words) => {
    let vowels = 'aiueo';
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(words[i] === vowels[j]){
                return true;
            }
        }
    }
    return false;
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let words = '';

for (let i = 0; i < 5; i++) {
    words += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(checkVowels('sky full of stars')); // true 
console.log(checkVowels('rythm')); // false
console.log(checkVowels(words)); // random words