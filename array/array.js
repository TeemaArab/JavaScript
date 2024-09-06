//array is a structure that can hold more than one value

let fruits = ["apple", "pear", "orange"];
console.log(fruits[1]);

// to replace an element in the array, use the following syntax

fruits[1] = "banana";
console.log(fruits[1]);


// to add an item at the end of the list
fruits.push("strawberry");
fruits.pop(""); // to remove an element form the end of the list
fruits.unshift("Mango") ; // add to the begining of the list
fruits.shift("");   // to remove an element from the beginning


// to get the length of the array
let numOfFruits = fruits.length;   //   <=  length property
console.log(numOfFruits);

let index = fruits.indexOf("orange");
console.log(index);

// we can loop through the element to find sth or list elements
for(i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}

// doing it in reverse order

for(let i= fruits.length; i>= 0 ; i--){
  console.log(fruits[i]);
}

// shortcut to display elements in array   
for(let fruit of fruits){
    console.log(fruit);
}


// to sort an array, we can use sort method
fruits.sort();  // sorts them in alphabetical order
fruits.sort().reverse(); // sorts items in reverse order