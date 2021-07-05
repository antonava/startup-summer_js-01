//CodeWars_1

let sumTwoSmallestNumbers = (numbers) => {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((prev, current) => prev + current, 0)
} 

console.log(sumTwoSmallestNumbers(numbers));



//CodeWars_2 (compose)

// let compose = (f, g) => {
    // return function(x) {
    //     return function(g(x));
    // }
// }



//CodeWars_3 (partition)

let isEven = (n) => n % 2 === 0;

let partitionOn = (arr) => {
    let arrEven = [];
    let arrOdd = [];

    let fns = arr.map((item) => {
        if(isEven(item)) {
            arrEven.push(item);
            
            return () => true;
        }

        arrOdd.push(item);

        return () => false;
    });

    let result = arrOdd.concat(arrEven); 

    return result;
}

console.log(partitionOn([1, 2, 3, 4, 5, 6]))



// Написать функцию которая принимает любое число и возвращает число в формате ХХ.ХХ, согласно правилам математики

let floatNumber = (num) => {
    return +num.toFixed(2);
}

console.log(floatNumber(5));






// Написать функцию которая принимает 3 аргумента: число1, оператор, число2
// применяет оператор к числу1 с аргументом число2
// возвращает результат, например calc(2, '*', 2) // 4
// не кидает исключения
// не возвращает NaN 
// в случае неверных аргументов возвращает строку с описанием ошибки


const isNumber = (num) => typeof num === 'number';
const isString = (str) => typeof str === 'string';

let calc = (num1, operator, num2) => {
    if(!isNumber(num1) || !isNumber(num2)) {
        return 'Argument is not a number';
    }
    if(!isString(operator)) {
        return 'Argument is not a string';
    }

    return eval(num1 + operator + num2);
}

console.log(calc(4, '+', 2));