// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max-min))  + min;

// console.log(randomNum);

fastFood = ['Pasta', 'Pizza', 'Burger'];

fruits = ['Apple', 'Banana', 'Orange'];

food = [...fastFood, ...fruits, "Karahi"];


console.log(food);
console.log((food.slice(0,food.indexOf('Orange'))).length);
