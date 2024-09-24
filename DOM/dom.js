// Dom = document object model
// Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// web browser constructs the DOM when it loads an HTML document, and 
// structures all the elements in a tree-like representation.
// javascript can access the DOM to dynamivally
// change the content,structure, and style of a webpage.


document.title = "My website";
console.dir(document);

const username = " Fatima";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username=== ""? `Guest` : username;