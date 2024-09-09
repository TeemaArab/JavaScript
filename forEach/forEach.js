// forEach() =method used to iterate over the elements of an arrray and apply
// a specified function(callback) to each element


// array.forEach(callback)

// let numbers = [1, 2, 3, 4, 5];

//  numbers.forEach(display);
// function display(element){
//     console.log(element);
// }


// let fruits =["apple", "orange", "pear", "banana", "kiwi"];
// fruits.forEach(capitalize);
//  fruits.forEach(display);

// function upperCase(element,index,array){
//     array[index]=element.toUpperCase();

// }


// function display(fruit){
//   console.log(fruit);
// }


// function capitalize(element,index,array){
//     array[index] = element.charAt(0). toUpperCase() + element.slice(1);
// }
// function display(element){
//     console.log(element);
// }
//---------------------------------------------------------------------------------------------------------

// .map() = accepts a callback and applied that function to each lelemnt of an array, then return a new array
// const numbers =[1, 2, 3, 4, 5];

// const sqaures = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element,3);
// }

// const students =["Patrick", "Tom", "Sue"];
// const studentsUpper =students.map(upperCase);
// const studentsLower = students.map(toLowerCase);
// console.log(studentsLower);
// console.log(studentsUpper);

// function upperCase(element){
//   return element.toUpperCase();
// }

// function toLowerCase (element){
//  return element.toLowerCase();
// }

const dates = ['2024-01-20', '2022-08-10', '2013-12-01'];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}, ${parts[1]}, ${parts[0]}}`;
}