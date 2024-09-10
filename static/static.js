//   ***** static is a keyword that defines properties or methods that belong to a class
//         itself rather than the objects created from that class(class owns anything static, not the objects)


class MathUtil{
   static PI = 3.14159;
   
   static getDiameter(radius){
    return radius * 2;
   }

   static getCircumference(radius){
    return 2 * this.PI * radius;
   }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10)); 
console.log(MathUtil.getCircumference(10));


// Another example  with both static and regular**************************************
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount ++;
    }
    static getuserCount(){  // static method
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){  // regular method
        console.log(`My username is  ${this.username}`)
    }
}
const user1 = new User("Bob");
const user2 = new User("Sara");
user1.sayHello();  // to call regular method
console.log(user2.username);
console.log(User.userCount);
User.getuserCount();   // to call static method