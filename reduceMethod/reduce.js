// .reduce() = reduce the elements of an array to a single value
// such ad finding total, min or max value

const prices = [2, 10, 24, 57, 3];
const total = prices.reduce(sum).toFixed(2);
console.log(total);

function sum(previousElement, nextElement){
    return previousElement +nextElement
}


let grades = [37, 70, 88, 98,45, 82,76,55];
let HighestScore = grades.reduce(FindMaxScore);
let lowestScore = grades.reduce(findLowestScore);
console.log(HighestScore);
console.log(lowestScore);



function FindMaxScore(previousElement, nextElement){
    return Math.max(previousElement, nextElement);
}

function findLowestScore(previousElement, nextElement){
    return Math.min(previousElement,nextElement);
}