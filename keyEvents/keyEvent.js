//eventListener = listen for specific ecents to create interactive web pages
//                events: keydown,keyup,keypress
//                document.addEventListener(event,callback);


const myBox= document.getElementById("myBox");
const moveAmount = 10;
let x = 0;   // for horitontal movement
let y = 0;   // for vertical movement

document.addEventListener("keydown", event =>{
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event =>{
    myBox.textContent = "🙂";
    myBox.style.backgroundColor = "lightblue";
});
document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    
    }
});

