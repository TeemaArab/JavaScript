//  ****************************  constructor
// constructor = special method for defining the properties and methods of objects

//  Creating  lots of objects manually can take much time. Instead we can use constructor which does the job automatically

function Car(make,model,year,color){    // c in Car should be uppercase(C)
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive  the ${this.model}`)}
}


// now we create an instance of an object

const car1 = new Car("Ford","Mustang", 2024, "white");
const car2 = new Car("Tesla","dtj", 2023, "black");

console.log(car1.make);
console.log(car1.year);

console.log(car2.make);
console.log(car2.color);
car1.drive();