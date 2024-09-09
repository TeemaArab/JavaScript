// .filter() = creates a new array by filtering out elements

let numbers =[1,2,3,4,5,6,7,8,9,10];
let newEvenNumbers = numbers.filter(EvenNumbers);

function EvenNumbers(element){
    const evenNums = element % 2 === 0;
    return evenNums;
}
console.log(newEvenNumbers);


const ages = [16, 17,16,18,40, 28];
const adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element){
    return element >= 18;
}

let fruits = ['apple', 'kiwi', 'banana', 'orange', 'pomegranate', 'strawberry','mango'];
let newFruits = fruits.filter(isFiveString);
console.log(newFruits);

function isFiveString(element){
 return element.length > 5;
}