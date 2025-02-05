// hello(bye);


// function hello(bye) {
//   console.log('Hello');
//   bye();
// }

// function bye() {
//   console.log('Bye');
// }
sum(result,10,20);

function sum(callBack,a,b){
    let r =a + b;
    callBack(r);
}

function result(r){
    console.log(r);
}