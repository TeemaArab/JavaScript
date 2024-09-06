// spread operator = ... allows an iterable such as an array or string to be expanded inot seperate elements
//   (unpacks the elements)

// let numbers = [1,2,3,4,5,6,7,8];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(max);
// console.log(min);

// let username = "Fatima Arab";
// let letter = [...username]. join("-");
// console.log(letter);


// we can use spread operator to comibne arrays
// let fruits =["banana", "apple", "orange", "berry", "cherries"];
// let vegetables =["lettuce", "cucumber", "tomato", "potato", "onion"];
// let food = [...fruits, ...vegetables];
// console.log(food);

// rest parameters = (...rest) allows a function work witrh a variable 
//                              number of arguments by bundling them into an array
//                             spread operator = expands an array into seperate elements
//                             rest = bundles seperate elements into an array 
// ---------------------rest is opposite of seperate--------------------------


function openFridge(...foods){
    console.log(foods);
}
const food1 = "pizza";
const food2 = "burgers";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1,food2,food3,food4);

