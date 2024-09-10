// arrow function = a concise way to write function expressions
//                  good for simple functions that you only use once
//                  (parameters) => some code

// -----------   function declaration
function hello(){
    console.log("hello");
}

hello();   // call it by function name


//  ------------------- arrow function
// concise way to write the above function. first we write function expression, then convert it to arrow function

const hello1 = function(){
    console.log("hello");
}

hello1();

// ....>>>>  now arraow function
const hello = (name) => console.log(`hello ${name}`);
hello("Sam");

///   ********************  another example ******************
// 1. function declaration
setTimeout (hello, 3000);
function hello(){
    console.log("Hello");
}

// 2. function expression
setTimeout (function(){
    console.log("hello"), 3000
})

// 3. arrow function
 setTimeout(() => console.log("Hello"), 3000);
 

 // ------------- arrow function with .map(), .filter(), .reduce();
const nums = [1,2,3,4,5,6];
const squares = nums.map((element) => Math.pow(element, 2) );
console.log(squares);

const evenNums = nums.filter((element) => element % 2 === 0);
console.log(evenNums);

const total = nums.reduce((accumulator, element) => accumulator + element);
console.log(total);

// function toSquare(){
//     return Math.pow(element, pow);
// }

