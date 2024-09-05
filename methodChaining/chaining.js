// methodchaining = calling one method after another in one continuous line of code.

// -----------------NO METHOD CHAINING ----------------------

let username = window.prompt("Enter your username:");
username = username.trim();
let letter = username.charAt(0);
letter =letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username);   // too many steps


//  -------------------------Method Chaining -----------------------------------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);

//Write a JavaScript program that prompts the user to enter a sentence.
// The program should then take the first word of the sentence, capitalize the first letter of that word, 
//and convert the rest of the letters in the word to lowercase. Finally, display the modified sentence.

