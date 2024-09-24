// DOM navigation = the process of navigating through the structure 
//                  of the HTML using Javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// . previousElementSibling
// . parentElement
// .children

// ------------------------------ .firstEleemntChild -------------------------

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.background = "yellow";
// firstChild.style.background = "skyBlue";

// const element2 = document.getElementById("vegetables");
// const firstchild2 = element2.firstElementChild;
// firstchild2.style.background = "green";

// const ulElements = document.querySelectorAll('ul');
// ulElements.forEach(ulElement =>{
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// });


// ------------------------------------  .lastElementChild -------------------------------------
// const lastElement = document.getElementById("desserts");
// const lastChild = lastElement.lastElementChild;
// lastChild.style.backgroundColor =  " skyblue";

// const ulElements2 = document.querySelectorAll("ul");
// ulElements2.forEach(ulElement => {
//     const lastchildren = ulElement.lastElementChild;
//     lastchildren.style.backgroundColor = "purple";
// })

//-------------------------------- .nextElementSibling --------------------------------------

const element = document.getElementById("loveStory");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// --------------------------- .previousElementSibling ----------------------------
const element3 = document.getElementById("psycho");
const previousElement = element3.previousElementSibling;
previousElement.style.backgroundColor= "orange";

// ---------------------------  .parentElement -----------------------------------------

const element4 = document.getElementById("titanic");
const parent = element4.parentElement;
parent.style.backgroundColor= "red";

//----------------------------- .children --------------------------------------

const element5 = document.getElementById("horror_movies");
const children =element5.children;
Array.from(children).forEach(child =>{
    child.style.backgroundColor = "pink";
});

//children[2].style.backgroundColor = "gray"
