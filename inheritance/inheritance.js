// ***************************   Inheritance
// inheritance = allows a new class to inherit properties and methods from an 
//               existing class( parent -> child)
//               helps with code reusability

class Animal{
    alive = true;

    eat(){
       console.log(`This ${this.name} is eating`);
      
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {  // this is a child class of Animal class
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running.`)   // child class can have their own charactristics
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} can swim.`)
    }
}

class Hawk extends Animal {
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} can fly.`)
    }
}

const rabbit = new Rabbit();    // these are objects
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;    // changed the condition . imagine rabbit was killed by hawk
console.log(rabbit.alive);    // name of objects and then property
rabbit.eat();
rabbit.sleep();
hawk.fly();
fish.swim();
rabbit.run();