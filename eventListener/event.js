// eventListener = listen for specific events to create interactive web pages
//               event: click,mouseover,mouseout
//               .addEventListener(event,callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event){
//  event.target.style.backgroundColor = "tomato";
//  event.target.textContent = "OOuch!🤕";
// }

// myBox.addEventListener("click", changeColor); 

// we can do anonymous function instead of the one above

// myBox.addEventListener("click", function(event){
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OOuch!🤕";
// });

// // or using arrow function below
// myBox.addEventListener("click", event =>{
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OOuch!🤕";
//   });


  // ------------------------------ mouseOver -------------
//   myBox.addEventListener("mouseover", event =>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it!😒";
//   });


  // ------------------------------ mouseOut -------------
  myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "aqua";
    event.target.textContent = "Click Me!😊";
  });


  myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch!🤕";
  });

  myButton.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it again!😒";
  });