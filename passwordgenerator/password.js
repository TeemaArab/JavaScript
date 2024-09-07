// random password generator


function generatePassword(passwordlength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=,.<>";

    let allowedChars = "";
    let password = "";

    // the code below means if yourpass includes lowercase, then get it from the lsit of lowercasrChars and add it 
    //to allowedChars, otherwise leave it empty 
    //  => : means otherwise or else
    // ? means if
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordlength <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of charachters needs to be selected)`;
    }

    for (i= 0; i< passwordLength; i++){
        const randomIndex = Math.floor( Math.random()* allowedChars.length);
        password += allowedChars [randomIndex];
    }

    
return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;



// we have to call passwordgenerate at the end and we save it in a variable
const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);


// at the end of the prgram, we have to be able to print it
console.log(`Your password is ${password}`);