/* ========================   Number  ================== */

const score = 100
// console.log(score);

const balance = new Number(200.20)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const newNumber = 123.895963

// console.log(newNumber.toPrecision(5));

const indNumber = 10000000

// console.log(indNumber.toLocaleString());
// console.log(indNumber.toLocaleString('en-IN'));

/*
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.MAX_VALUE
Number.MIN_VALUE
*/

/* ========================   Maths  ================== */


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.9)); // Uper
// console.log(Math.floor(4.9)); // dowen

const min = 10; // replace with your desired minimum value
const max = 20; // replace with your desired maximum value

const randomNum = min + Math.random() * (max - min);

console.log(Math.round(randomNum));



