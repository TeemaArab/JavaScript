// sort() = method used to sort elements of an array in place.
//        sorts elements as strings in lexicographic order, not alphabetical
//        lexicographic = (alphabet + numbers +symbols) as strings

// let fruits =["cherries", "banana", "kiwi", "apple", "pineapple"];
// fruits.sort();
// console.log(fruits);

// let numbers =[1,6,8,9,23,6,90];
// numbers.sort((a,b) => a-b);  // this function helps us to put numbers in order . 
//                              //if we want reverse order ,that would be b-a
// console.log(numbers);

const people = [{name:"Reza", age:20, gpa:3.0 },
               {name:"Ali", age:27, gpa:3.45 },
               {name:"Sara", age:10, gpa:3.56 },
               {name:"Luise", age:23, gpa:3.10 }]
people.sort((a, b) => a.age - b.age); // sort by age
console.log(people);
people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

// for sorting name which is a string
people.sort((a,b) => a.name.localeCompare(b.name) );
people.sort((a,b) => b.name.localeCompare(a.name) ); // in reverse order

console.log(people);