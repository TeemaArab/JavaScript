// allows me to manipulate and work with text which is called string in programming.

let userName = "Fatima Arab";
console.log(userName.charAt(3));
console.log(userName.indexOf("t"));  // indexOf() is the opposite of CharAT(), it returns the number wheas  charAt() gives the character.

// if we have more than one similar character in a word and we want the last time it appeared in the word we use "lastIndexOf()"
console.log(userName.lastIndexOf("a"));
console.log(userName.length);

//trim  = obviusly it removes the spaces at the end of the string if there is any
lastName = '    Smith    ';

console.log( lastName.trim());

// to change the string into uppercase, we use     " toUpperCase()"
console.log(lastName.toUpperCase());

// toLowerCase()

firstName = " SAM";
console.log(firstName.toLowerCase());

// to repeat the string   .repeat()
console.log(lastName.repeat(2));

// to determine if a string starts with sth. it returns boolean       .startsWith()   it is useful in if statements
 let city = 'New York';
 console.log(city.startsWith("e"));
 console.log(city.startsWith("N"));

 let password = "   LULU";

 if (password.startsWith(" ")){
    console.log("Your password can't start with space");
 }
 else{
    console.log(password);
 }

 // there is also endsWith()
// there is alos .includes method to check if a string contains anything.

userName2 = " Luise_Swiss22"
if(userName2.includes("_")){
    console.log(" Username can't contain a number as a special character.choose a different one.")
}
else{
    console.log(userName2)
}

// .replaceAll( , )
let phoneNumber = "647-987-9080";
phoneNumber = phoneNumber.replaceAll("-", "/ ");
console.log(phoneNumber);

//.padStart( , )  add some paading to the start

let date = "24-09-11";
date = date.padStart(10, 20);
console.log(date)

