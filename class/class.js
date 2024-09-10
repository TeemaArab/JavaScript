// *********************** class

// class = (ES6 feature) provides a more structured and cleaner way to
//                       work with objects compared to traditional constructor functions
//                      ex. static keyword, encapsulation, inheritance

function Product(name, price){
    this.name = name,
    this.price = price,

    //method 1
    this.displayProduct = function(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
    }
    // method2
    this.caculateTotal = function(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 1.05;

let product1 = new Product("shirt", 23.56);
let product2 = new Product("pants", 43.90);

product1.displayProduct();

const totalPrice = product1.calculateTotal(salesTax);
console.log(`Total price with tax is: $${totalPrice.toFixed(2)}`);


// ↑↑↑   we used constroctor  . now  are going to use class below ↓↓                              

class Product{
    constructor(name,price){
        this.name = name,
        this.price = price
    }

    displayProduct(){   // we dont need function keyword inside the class for this method
        console.log(`Product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
    
}
const salesTax2 = 1.05;

const product3 = new Product("shirt",23.56);
const product4 = new Product("shoes", 160.00);
product3.displayProduct();

const total = product3.calculateTotal(salesTax2);
console.log(`Total price with tax is: $${total.toFixed(2)}`);

