// let numbers = [1, 2, 3, 4, 5];


// numbers.forEach(displayNumber);
// numbers.forEach(evenNumbers);
// numbers.forEach(oddNumbers);

// function displayNumber(number) {
//     console.log(number);
// }

// function evenNumbers(number) {
//     if(number % 2 === 0){
//         console.log(number);
//     }
// }

// function oddNumbers(number) {
//     if(number % 2 !== 0){
//         console.log(number);
//     }
// }

let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];


fruits.forEach(capitilize);
fruits.forEach(displayFruits);

function upperCase(element,index,array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element,index,array) {
    array[index] = element.toLowerCase();
}

function displayFruits(fruit) {
    console.log(fruit);
}   

function capitilize(element,index,array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
