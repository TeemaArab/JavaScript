// ***********************  super
// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal{
      constructor(name,age){
        this.name = name;
        this.age = age;
  }
  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed} mph`)
  }
}
class Rabbit extends Animal{

      constructor(name,age,runSpeed){
           super(name,age); // call the parent class. it wont work otherwise
           this.runSpeed = runSpeed;
      }
    run(){
        console.log(`The ${this.name} can run`);
        super.move(this.runSpeed);
    } 
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
   }
   swim(){
    console.log(`This ${this.name} can swim.`);
    super.move(this.swimSpeed);
   }
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
   }
   fly(){
    console.log(`The ${this.name} can fly.`);
    super.move(this.flySpeed);
   }
}

const rabbit = new Rabbit("Bunny", 1, 24);
const fish = new Fish("Nemo", 2, 11);
const hawk = new Hawk("Ben", 1, 49);

// console.log(` Rabbit's name is ${rabbit.name}`);
// console.log (`Rabbit's age is ${rabbit.age}`);
// console.log(`fish swims at ${fish.swimSpeed} per mile`);
// fish.swim();
// rabbit.run();
hawk.fly();