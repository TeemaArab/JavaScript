// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring


//    --------------------- EXAMPLE 1 ---------------------------
// swap the value of two variables

let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a)
console.log(b);;

// -------------------------Example 2 --------------------------
// swap 2 elements in an array
const colors =["Red", "blue", "black", "white", "green"];
[colors[0], colors[3]] = [colors[3],colors[0]]
console.log(colors);

// --------------------Example 3 -----------------------------
// assign array elements to variables
const colors2 =["Red", "blue", "black", "white", "green"];
const[firstColor, secondColor, thirdColor,...extraColors] = colors2;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ---------------------Example 4 ----------------------
//extract values from objects
const person1 = {
    firstName: "John",
    lastName: "Smith",
    age: 34,
    job:"Teacher",
}

const person2 ={
    firstName: "Ali",
    lastName: "Taheri",
    age: 28,
    
}
const {firstName,lastName,age,job="unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(job);

// ........................Example 5 -----------------------------
// destructure in function parameters

function displayPerson({firstName,lastName,age,job= "Unemployed"}){ // remember the{} inside ()  , you can define default value
    console.log(`name: ${firstName}, ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
    
}
const person3 = {
    firstName: "John",
    lastName: "Smith",
    age: 34,
    job:"Teacher",
}

const person4 ={
    firstName: "Sue",
    lastName: "Taheri",
    age: 11,
    
}
displayPerson(person4);   // I have to decide here for which person I need the information to be shown