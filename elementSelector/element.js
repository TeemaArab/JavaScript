// Element selector = Methods used to target and manipulate HTML elements 
//                   they allow you to select one or multiple HTML elements
//                  from the DOM (Document Object Model)


// 1. document.getElementById()            // element or null
// 2.  document.getElementdClassName()     // HTML collection
// 3.DocumentGetElementByTagName()         // HTML collection
// 4. document.querySelector()             //element or null
// 5.document.querySelectorAll()           // nodelist

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor= "yellow";
// myHeading.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");  // html collection of fruits
// fruits[0].style.backgroundColor = "yellow";

// // to iterate through all elements
// for ( let fruit of fruits){
//     fruit.style.backgroundColor= "skyblue";
// }

// // fruits.forEach()   -> does not work because html collection does not have for each method
// //instead we can use the following structure

// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor = "orange";
// });// this will return new array 


// 3. getElementByTagName()
 // --------------------first Example ----------------------------------
// const h4Elements = document.getElementsByTagName("h4");
// // h4Elements[1].style.backgroundColor = "yellow";
// for(let element of h4Elements){
//     element.style.backgroundColor = "yellow";
// }

//------------------- second example ------------------------------------
// const liElements = document.getElementsByTagName('li');
// for (let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
//}

// if i dont want to use for loop and want to use forEach ,the following way should be used
// Array.from(liElements).forEach(liElement =>{
//     liElement.style.backgroundColor="skyblue";
// });

// 4. querySelector
// matches the first element or it returns null

const element = document.querySelector(".fruits");
element.style.backgroundColor = "yellow";  // only the first element will be highlighted

// 5.querySelectorAll()      returns node List which are static


const lists = document.querySelectorAll("li");
//list[0].style.backgroundColor = "lightblue";
lists.forEach(list =>{
    list.style.backgroundColor=" lightgreen";
});

