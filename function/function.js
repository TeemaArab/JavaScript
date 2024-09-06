// function : a section of reusable code. Declare code once and use it later whenever you want.
// it avoids repeating some codes.
// call the function to execute the code

// we use the key word fuction followed by a name for the fuction ,
// then a set of parantethis and curly braclets.

// function happyBirthday(username, age){
//     console.log("happy birthday to you");
//     console.log(`happy birthday to ${username}`);
//     console.log("happy birthday dear you");
//     console.log(`happy birthday to you. You are ${age} years old now.`);

// }

// happyBirthday("Sina", 23); // sina and 23 are arguments.
  // this calls the function. we can think of  the paranthesis () as telephone to talk to each other
  // we can add name and age as variables or parameters. they go inside the () in function block

// happyBirthday("Tom", 78);

// return keyword


function add(x,y){
 let result = x+y ;     // or simply say return x+y  <<<<<< important   
 return result;
}

function subtract(x,y){
    let result= x-y;
    return result;
}

function multiply(x,y){
    return x*y
}


let answer = multiply(12,13);
console.log(answer)   // or simply console.log(add(12,13))  if oyu dont want to store the result



function even(number){
    if (number%2===0){
        return true;
    }
    else{
        return false;
    }
    
}
console.log(even(4));


function isValidEmail(email){
   if (email.includes("@")){
    return true;
   }
   else{
    return false;
   }
}
console.log(isValidEmail("sina@georgebrown.ca"));
console.log(isValidEmail("som.rubric.com"));