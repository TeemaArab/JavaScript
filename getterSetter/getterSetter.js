// **************************  getter & setter   ****************************************//
// getter = special method that makes a property readable
// setter = special method that makes a property readable

/// validate and modify a value when reading/writing a property


class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be positive number");
        }
    }
    set height(newHeight){   // by stters , we can even update our values later
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error(" Height must be a positive number");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    // with getter we can have access to properties that were not actually created before
    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(4, 3);
rectangle.height = 2;  // updating values
rectangle.width = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


// ------------------------------ Second example ---------------------------------------------------
class Person{
    constructor(firstName,lastName,age){  // we need to validate these properties before assigning value to them
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === 'string' && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else{
            console.error("last name must be a non-empty string");
        }
    }
    set age(newAge){
        if (typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age should be a positive number")
        }
    }
    // if we don't define a getter ,all the answers in the console log will be undefined even if arguments are correct. 
    // so now we need to define getter

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get  fullName(){
        return this._firstName + ' ' + this._lastName;
    }
    get age(){
        return this._age;
    }
}

const person = new Person("Fatima", "Arab", 41);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);