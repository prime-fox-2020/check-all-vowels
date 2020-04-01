let string = 'AUI';

function checkVowel(string) {
    if (string == '') {
        return string;
    }

    let check = 'AIUEO';
    let count = 0;
    for (let a = 0; a < string.length; a++) {
        for (let b = 0; b < check.length; b++) {
            if (string[a] == check[b]) {
                count++;
                break;
            }
        }
    }

    if (count == string.length) {
        return true;
    } else {
        return false;
    }
}

console.log(checkVowel('AIU'));
console.log(checkVowel('AKU'));
console.log(checkVowel('AOIUEAI'));
console.log(checkVowel(''));