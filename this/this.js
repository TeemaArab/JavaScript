//*************************     this  

// this = reference to the object where this is used
// (the object depends on the immediate context)
// person.name = this.name


const person1 ={
    firstName : "Terry",
    lastName : "Ahmadi",
    age: 22,
    isStudent : true,
    favColor :" blue",
    sayHello: function(){console.log(`Hi, i am ${this.lastName}`)},
    like:function(){console.log(`${this.firstName} likes ${this.favColor}`)},
}
person1.sayHello();
person1.like();


const person2 ={
    firstName : "Sara",
    lastName : "Jackson",
    age: 12,
    isStudent : false,
    favColor :" green",
    sayHello: function(){console.log(`Hi, i am ${this.lastName}`)},
    like:function(){console.log(`${this.firstName} likes ${this.favColor}`)},
}

person2.like();