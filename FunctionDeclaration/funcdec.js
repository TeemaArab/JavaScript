// function decleration = define a resusable block of code that performs a specific task


// function hello (){
//     console.log(hello);
// }
// // function expression = a way to define functions as values or variables

// let hello = function(){
//     console.log("hello");
// }
// hello();   // this is assigning function to a variable


// setTimeout(hello, 3000);     //hello here is callback    we can also use function as an argument instead of hello callback

// setTimeout(function(){
//     console.log("Hello");
// },4000);


//function declaration
// const numbers =[1,2,3,4,5,6,7];

// const squares = numbers.map(toSquare);
// console.log(squares);

// function toSquare(element){
//    return  Math.pow(element, 2);    // we can treat this function as a value
//}

// -----------------------------------------------------------------------------

// function expression
const numbers =[1,2,3,4,5,6,7];

const squares = numbers.map(function(element){
    return  Math.pow(element, 2);
});
console.log(squares);

    // we can treat this function as a value
const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
const evenNums = nums.filter(function(element){
    return element %2 === 0;
});


const total = nums.reduce(function(acumulator, element){
    return acumulator + element;
})

console.log(total);