
//.forEach(fn): method executes a provided function once for each array element.

//.map(fn): method creates a new array with the results of calling a 
// provided function on every element in the calling array.


//.filter(fn): create new arrray by filtering out the true values from the array

//.reduce(fn): method applies a function against an accumulator and each element in the array


//setTimeout(()=>console.log("Hello"), 3000);

const arr = [1,2,3,4,5,6,7,8,9,10];

// const squares = arr.map((num) => num*num);

// console.log(squares);

// const even = arr.filter((num) => num%2 === 0);

// console.log(even);

const total = arr.reduce((acc,arr)=>arr+acc);

console.log(total);