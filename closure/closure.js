//closure = A function defined inside of another function,
//          the inner function has access to te variables
//          and scope of the outer function.
//          alllow for private variables and state maintenance 
//          used frequently i JS frameworks: React, Vue, Angular



function CreateNotepad(){  // step 1: outer function which is you with a notepad
    let toDoList = [];  // the notepad (private list)

    function assistant(task){  // step 2: inner function(your assistant who can update or read the notepad)
        if(task){
            toDoList.push(task); // adding a task to the notepad
            console.log(`Task:  ${task} added to the to do list.`);
        }
        else{
            console.log(`Your to-to-list :`.toDoList.join(', '))// reading the note book
    
        }
    }
    return assistant;   //step 3: Return the inner function
}

// step 4: use the closure( your assitant managing the notepad)

const myAssistant = CreateNotepad(); // you hire the assistant
myAssistant("Buy Groceries");
myAssistant("Finish homework");


// --------------------------------- Second Example ------------------------------------
function bankAccount(){
    let balance = 0;

    function bankClerk(action, amount){
         if(action=== "deposit"){
            balance += amount;
            console.log(`Deposited amount:  ${amount}. New balance is $${balance}`);
         }
         else if( action === "withdraw"){
            balance -= amount;
            console.log(`Withdrawn amount:  ${amount}. New balance is $${balance}`);
         }
         else if (action === "CheckBalance"){
            console.log(`Deposited amount:  ${amount}. New balance is $${balance}`);
         }
         
    }
    return bankClerk;
}

const myBankClerk = bankAccount();
myBankClerk("deposit", 100);
myBankClerk("checkBalance");

myBankClerk("withdraw", 34);