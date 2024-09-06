//number guees game

const minNum = 100;
const maxNum = 200;
const answer =Math.floor(Math.random() * (maxNum - minNum + 1))+ minNum ;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`make a guess between ${minNum} - ${maxNum}`);
    guess = Number(guess);


    if (isNaN(guess)){
         window.alert("Please enter a number");
    }
    else if(guess < minNum || guess> maxNum){
          window.alert("Please enter a number between the range.");
    }
    else{
        attempts ++;

        if(guess < answer){
            window.alert("The number is higher ");
        } 
        else if(guess> answer){
            window.alert(" The number is smaller.");
        }
        else{
            window.alert(`correct. ${answer} is the correct answer. It took you ${attempts}`);
            running = false;
        
        }
   
    }
}
