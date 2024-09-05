// while loop =repeat some code while some condition is true.
// let username = "Tom";
// if ( username === ""){
//     console.log("You did not enter your name.");
// }
// else{
//     console.log(`Hello ${username}`);
// }

// I can use while loop insted

// while (username === ""){
//     console.log(" You did not enter your name");
// }
// console.log(`Hello ${username}`);

// more logical would be

// let name ="";
// while(name === "" || name === null){
//     name = window.prompt(`Enter your name:`);
// }
// console.log(`Hello ${name}`);


// there is also do while loop
// we check the condition at the end

// let lastName;
// do{
//     lastName = window.prompt("Enter your last name: ");
// }while (lastName === "" || lastName === null){
//     console.log(`Hello  Mr or Ms ${lastName}`);
// }

let loggedIn = false;
let username;
let password;

while (!loggedIn){
    username = window.prompt("Enter your username:");
    password = window.prompt("enter your password: ");

    if(username === "Fatima" && password === "Arab"){
        loggedIn = true;
        console.log("You are loggged in!");
    }
    else{
        console.log("Invalid credentials! Please try again. ");
    }
}