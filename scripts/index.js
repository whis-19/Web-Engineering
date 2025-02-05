
//.forEach(fn): method executes a provided function once for each array element.

//.map(fn): method creates a new array with the results of calling a 
// provided function on every element in the calling array.


//.filter(fn): create new arrray by filtering out the true values from the array

//.reduce(fn): method applies a function against an accumulator and each element in the array


// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const total = prices.reduce(sum);
// console.log(total);
// function sum(acc,element){
//     return acc + element;
// }


const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce(findMaxGrade);
console.log(maxGrade);

function findMaxGrade(accumulator, currentValue){
    return Math.max(accumulator, currentValue);
}