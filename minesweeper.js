//In this exercise you have to create some code that 
//counts the number of mines adjacent to a given empty square and replaces that square with the count

// let array = [
//     ['', '*', '', '*', ''],
//     ['', '', '*', '', ''],
//     ['', '', '*', '', ''],
//     ['', '', '' , '', '']
// ];


//1 - mine

let arr = [
    ['0', '1', '0', '1', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0' , '0', '0']
];



for (let i = 0; i <= arr.length - 1; i++) {
    for(let j = 0; j <= arr[i].length - 1; j++) {
        if(arr[i][j] == 1) {
         
        } else {
            let count = 0;
            if(arr[i - 1] && arr[i - 1][j - 1] === 1) count ++;
            if()
        }
    }
}