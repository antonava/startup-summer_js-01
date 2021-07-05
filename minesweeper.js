//In this exercise you have to create some code that 
//counts the number of mines adjacent to a given empty square and replaces that square with the count

//1 - mine

let arr = [
    ['0', '1', '0', '1', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0' , '0', '0']
];


let mark = [];
for (let i = 0; i <= arr.length - 1; i++) { //row
    mark[i] = [];
    for(let j = 0; j <= arr[i].length - 1; j++) { //col
        if(arr[i][j] == 1) {
         mark[i][j] = 10;
        } else {
            let count = 0;
            if(arr[i - 1] && arr[i - 1][j - 1] === 1) count ++;
            if(arr[i - 1] && arr[i - 1][j] === 1) count ++;
            if(arr[i - 1] && arr[i - 1][j + 1] === 1) count ++;
            if(arr[i][j - 1] === 1) count ++;
            if(arr[i][j + 1] === 1) count ++;
            if(arr[i + 1] && arr[i + 1][j - 1] === 1) count ++;
            if(arr[i + 1] && arr[i + 1][j] === 1) count ++;
            if(arr[i + 1] && arr[i + 1][j + 1] === 1) count ++;
            mark[i][j] = count;
        }
    }
}

console.log(mark);