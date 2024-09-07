//callback = a function that is passed as an argument to another function.
// used to handle asynchronous operations:
// 1. Reading a file.
// 2. Newwork requests
//3. interacting with dtabase

// it means "hey, When you are done,do this next."


// hello(leave);

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function leave(){
//     console.log("Leave");
// }

// function goodbye(){
//     console.log("Goodbye!");
// }


sum(displayPage, 1,2);
function sum(callback, x, y){
    let result = x+y;
    callback(result);
}
function displayConsole(result){
   console.log(result);
}

function displayPage(result){
 document.getElementById("h1").textContent = result;
}