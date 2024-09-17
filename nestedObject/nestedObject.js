// nested Object = object inside of another object
//                 allow you to represent more complex data structures
//                 child object is enclosed by a parent object

//              person{ address{}, contactInfo{}}
//              shoppingCard{keyboard{}, mouse{}, monitor{}}

const person = {
    fullName : " Haily Watson",
    age: 30,
    isStudent : true,
    hobbies: ["Tennis","cooking","movies"],
    //nested object ↓↓↓↓
    address: {
        street: "123 FGRE Street",
        city: "toronto",
        country: "Canada",
    }

}
console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[1]);  // special hobbies from the list
console.log(person.address); // this gives back the whole address including street,city,country
console.log(person.address.country)
console.log(person.address.city);

// loop through nested object
for(const property in person.address){
  console.log(person.address[property]); // [] will be used to have access to the curren property
}


// -------------------------another example ----------------------------------
 class Person{
    constructor(name,age, ...address){
           this.name = name;
           this.age = age;
           this.address = new Address(...address);    //we create an object for address class below
    }
 }

class Address{     // based on the instruction, first we created this class ,then the person class above ↑↑↑
    constructor(street,city,country){
           this.street = street;
           this.city = city;
           this.country = country;
    }
}

const person1 = new Person("Tina", 23,"23 Conne St", "Toronto", "Canada");
const person2 = new Person("Ali", 14, "123 Green St","Vancouver", "Canada");
const person3 = new Person("Sam", 45, "5500 Yonge St", "Toronto", "Canada");


console.log(person1.age);
console.log(person1.address); // returns the whole address
//console.log(person1.address.city);
console.log(person3.address.street);