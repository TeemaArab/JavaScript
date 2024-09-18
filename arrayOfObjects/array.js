const fruits = [{name:"apple", color:"red", calories: 95},   //array of objects, that why we have{ } inside []
               {name:"pear", color:"green", calories: 65},
               {name:"banana", color:"yellow", calories: 395},
               {name:"strawberry", color:"red", calories: 35},
               {name:"kiwi", color:"brown", calories: 55}];

console.log(fruits[3].calories);
console.log(fruits[1].name);
console.log(fruits[0].color);
fruits.push({name:"grapes", color:"red", calories: 35});  // to add an object to the end of our array

fruits.pop(); //remove the last object from array list
console.log(fruits);

// ↓↓ splice  removes element at specific index
fruits.splice(3,4);  //removes element at index 3 and index 
console.log(fruits);

// -----------forEach()----------------
//        we used it to loop through an array

fruits.forEach( fruit => console.log(fruit));   // to choose specific proprrty we use .propertName ↓↓↓
fruits.forEach(fruit => console.log(fruit.color));

// --------------------------map()------------------------------
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);


// ---------------------filter() -------------------------------
const samefruitColor = fruits.filter(fruit => fruit.color === "red");
console.log(samefruitColor);

const highCalories = fruits.filter(fruit => fruit.calories>100);
console.log(highCalories);

// --------------------reduce()--------------------
const maxFruits = fruits.reduce((max,fruit)=> 
                                  fruit.calories > max.calories? //is the calories of next fruit bigger than the present element which has the highest calroies
                                  fruit : max);   // : means else 
                                  //? means if it is true) 
                                  //max.calories => calories of the highest fruit in the list
 //max = is the current element with the highest value in the list and fruit is the next element
 console.log(maxFruits);  // this gives the the name,the color and the calories(the entire object)
 console.log(maxFruits.calories);  // if you only want the calories