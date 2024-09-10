// object = a collection of related properties and/or methods 
//          can represent real world objects(people,products,places)

//          object = { key:value, function()}

// ** method is a function that belongs to an object    .function are actions they can perform
// *) properties are characteristics of an object

const person1 = {
    firstName : "Tina",
    lastName : "Jackson",
    age : 30,
    isEmployed : true,
    sayHello: function(){console.log("hi, I am Tina")},
    eat: function(){ console.log(" I am eating pizza")},
}
// access the properties 
console.log(person1.firstName);
console.log(person1.age);
person1.sayHello();

const person2 = {
    firstName : "Sam",
    lastName : "Tomson",
    age : 45,
    isEmployed : false,
    sayHello : () => {console.log("Hello, I am 45 years old")},
    eat: ()=> {console.log("I am eating salad")},
}
console.log(person2.age);