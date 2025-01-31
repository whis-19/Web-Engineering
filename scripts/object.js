//Object first lettercapital
//All caps mean constant

let person = { name: 'Abdullah',
    age : 22,
    isStudent: true,
    registeredCourse : {
        title : "PF",
        isPassed : true
    },
    displayName : function(){
        return this.name;
    }

};

console.log(person);

for (key in person){
    console.log(person[key]);
}


// let person = new Object();
// person.name = "Abdullah";
// person.isStudent = true;
// person.courses = ["CN","DS", "WEB"];

// let person2 = Object.create(null);

// console.log(person.courses);


// let va = "name";

// delete person[va];

// console.log(person[va]);


//person["registeredCourse": { cr1: "OOP", isP : true, cr2 : "DS" , iP : ture, cr3 : "DSA", isPass : false }]


// Object.keys(person);
// Object.values(person);

//Object destructuring
//let {name , isStudent} = person;


// spread with object => ...
// rest when as parameter => ...

//spread
//let currStudent = {... person};


//rest
// function add (... val){
//     let result = 0;
//     for(c = 0; c<val.length();c++){
//         result+=val;
//     }
// }


function createPerson(name, isStudent){
    this.name = name;
    this.isStudent = isStudent;
}


let person4 = createPerson("Taqi", true);


person.__proto__.semesterStrat = ture;
person.prototype.greet = function(){
    return "Hello" + $(this.name);
}

