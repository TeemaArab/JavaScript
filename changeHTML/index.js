// ----------------------  Example 1 <h1> ------------------------

// step 1 Create the eleemnt
  const newH1 = document.createElement("h1");
  newH1.id = "myH1";
  newH1.style.color="tomato";


// step 2 Add attributes /properties
newH1.textContent = "I like pizza";
newH1.style.textAlign= "center";

// step 3 Append eleemnt to DOM
  //document.body.append(newH1);   //out the text at the end as the last child
  //document.body.prepend(newH1);
document.getElementById("box1").append(newH1);  // it is the last child of box 1
 //document.getElementById("box2").prepend(newH1);

// to sandwich it between box1 and box2 

// const box2= document.getElementById("box2");
// document.body.insertBefore(newH1, box2);  // (newElement which is newH1, currentElement which is box2)

//what if our elements have no id?? then we use querySelector

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]); // refering to box 2

// remove html element

document.getElementById("box1").removeChild(newH1);  // select the parent element