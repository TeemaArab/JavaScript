// ternary operator is a shortcut to  if{} and else{} statements
// condition? codeIfTrue : codeIfFalse;

//let age = 11;
//let message = age >= 18 ? 'You are an adult': 'You are a minor';
//console.log(message);

// let time = 6;
// let greeting = time < 12 ? "GOOD MORNING": "GOOD AFTERNOON";
// console.log(greeting)

// let isStudent = true;
// let message = isStudent ? 'You are a student': 'You are not a student';
// console.log(message)

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10: 0;
console.log(`Your total is $ ${purchaseAmount - purchaseAmount *(discount/100)}`);