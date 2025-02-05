
//.forEach(fn): method executes a provided function once for each array element.

//.map(fn): method creates a new array with the results of calling a 
// provided function on every element in the calling array.


//.filter(fn): create new arrray by filtering out the true values from the array

//.reduce(fn): method applies a function against an accumulator and each element in the array

// let numbers = [1, 2, 3, 4, 5];

// function isEven(number) {
//   return number % 2 === 0;
// }

// function isOdd(number) {  
//   return number % 2 !== 0;
// }
// let even = numbers.filter(isEven); 
// let odd = numbers.filter(isOdd);

// console.log(even); 

// console.log(odd);


// const ages = [32, 33, 16, 40];

// const adults = ages.filter((age) => age >= 18);

// console.log(adults);


const fruits = ["apple", "orange", "banana", "kiwi"];

function getSmallWords(fruit) {
  return fruit.length <= 5;
}

const smallWords = fruits.filter(getSmallWords);

console.log(smallWords); 