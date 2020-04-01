function generateArr(row, col){
    let list1 = ['A', 'I', 'U', 'E', 'O', ];
    let list2 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

    let arr = [];
    for(let a = 0; a < row; a++){
        let temp = [];
        for(let b = 0; b < col; b++){
            let change = Math.floor(Math.random() * 11);
            if(change <= 6){
                temp.push(list1[Math.floor(Math.random() * list1.length)]);
            } else {
                temp.push(list2[Math.floor(Math.random() * list2.length)]);
            }
        }
        arr.push(temp);
    }

    return arr

}

console.log(generateArr(5, 4));
