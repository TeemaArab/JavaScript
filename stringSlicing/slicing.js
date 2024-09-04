// string slicing = creating a substring from a portion of another string
// string.slice(start, end)

// const fullName = "Fatima Arab";
// let firstName = fullName.slice(0,6); // the end is exclusive
// console.log(firstName);
// let lastName = fullName.slice(7,11);
// console.log(lastName);
//  let lastChar = fullName.slice(-1);
//  console.log(lastChar);

//  let firstName2 = fullName.slice(0, fullName.indexOf(' '));
//  console.log(firstName2);

//  let lastName2 = fullName.slice(fullName.indexOf(" "));
//  console.log(lastName2);

const email = "Fatima.arab@gmail.com";
let username = email.slice(0, email.indexOf("."));
let extention = email.slice(email.indexOf("@"));
console.log(username);
console.log(extention);