hello(bye);


function hello(bye) {
  console.log('Hello');
  bye();
}

function bye() {
  console.log('Bye');
}