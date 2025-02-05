const numbers = [1, 2, 3, 4, 5];



// const squares = numbers.map(square);
// console.log(squares);
// console.log(numbers);  
// function square(numbers) {
//   return Math.pow(numbers, 2);
// }


// const students = ["Ali","Taqi", "Faizan", "Tallal"];
// const upperCaseStudents = students.map(upperCase);

// console.log(upperCaseStudents);
// function upperCase(element,index,array) {
//     return element.charAt(0).toUpperCase() + element.slice(1);
// }
// console.log(upperCaseStudents);
// function upperCase(element,index,array) {
//     return element.charAt(0).toUpperCase() + element.slice(1);
// }

const dates = ["2024-12-24", "2023-11-23", "2022-10-22", "2021-09-21"];

const formattedDates = dates.map(formatDate);

console.log(formattedDates);

function formatDate(date) {
    const parts = date.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}