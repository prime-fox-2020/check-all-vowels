
checkAllVowels = string => {

    const vowels = 'aiueo';
    let counter = 0;
    for (i of string) {
        if (vowels.indexOf(i) !== -1) {
            counter++
        }
    }

    return (string.length == counter)
}

// test case
console.log(checkAllVowels('aiueo'))
console.log(checkAllVowels('hacktiv8'))
console.log(checkAllVowels('uuuuuuuuuuuu'))
console.log(checkAllVowels('rcbdkl'))
