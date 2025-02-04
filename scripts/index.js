function fucn1() {
  console.log(greet("Hahsim"));
}//();


let greet = function meet(name="Whis"){ 
    return `Hello, ${name}!` 
}

// const hasDuplicates = arr => {
//   const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
//   if (duplicates.length) console.log("Duplicated entries:", [...new Set(duplicates)]);
//   return duplicates.length > 0;
// };

// // Example usage
// console.log(hasDuplicates([1, 2, 3, 4, 5]));     // Output: false
// console.log(hasDuplicates([1, 2, 3, 4, 1, 2]));  // Output: Duplicated entries: [1, 2] \n true

// const hasDuplicates = arr => {
//   const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
//   if (duplicates.length) console.log("Duplicated entries:", [...new Set(duplicates)]);
//   return duplicates.length > 0;
// };

// // Example usage
// console.log(hasDuplicates([1, 2, 3, 4, 5]));  // Output: false
// console.log(hasDuplicates([1, 2, 3, 4, 1, 2]));  // Output: Duplicated entries: [1, 2] \n true

// const findDuplicates = arr => [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];

// // Example usage
// const arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];
// console.log(findDuplicates(arr)); // Output: [1, 2, 3]




// let manipulator = function(value1,value2,func){
//   return func(value1,value2);
// }


// let multiply = function(a,b){return a*b;}
// // console.log(manipulator(3,5,multiply))

// //function inside a function is closure



function counter(arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1]){
    return () => [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];
  }


let increment = counter();