// ES6 Module = an external file that contains reusable code
             // that can be imported into other javascript files
             //write reusable code for many different apps.
             //can contain variables,classes,functions and .....more
             // introduced as part of ECMAScript 20105 update
import {PI, getCircumference,getArea,getVolume} from './MathUtil.js';  // functions that are imported from math module
console.log(PI);

const circumference = getCircumference(10); // store the result within a variable and invoke it from getCircumference function in the module
const area =getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm ^`);
console.log(`${volume.toFixed(2)}cm ^3`);