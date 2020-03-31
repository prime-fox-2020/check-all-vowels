function vowels(str){

    let strLow = str.toLowerCase()
    //console.log(strLow)
    let vocal = 'aiueo'
    let result = ''
    for(let i=0; i<strLow.length; i++){
        //console.log(strLow[i])
        for(let j=0; j<vocal.length; j++){
            if(strLow[i] == vocal[j] ){
                result += strLow[i]
            }
        }
    }

    if(result.length == str.length) return true
    return false
}
console.log(vowels('AauIUEO'))
console.log(vowels('AKYEO'))