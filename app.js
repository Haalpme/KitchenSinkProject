let name = "Joao Sousa";
const stateUs = 50;
stateUsUpdated = stateUs + 4;
stateUsUpdatedAgain = stateUsUpdated + 5;

console.log(name);
console.log(stateUs);


// function name

function sayHello() {
    console.log("Hello World")
}

sayHello();

function checkAge(name, age) {
    if (age < 21){
        console.log("Sorry " + name + ", you arent old enough to view this page!");
    }
}

checkAge("Charles", 18);

let vegetables = ['alface', 'tomate', 'so isso'];


for (i = 0; i < vegetables.length; i ++) {

    console.log(vegetables[i])
}

let people = [{
    names:"Joao",
    age: 29
}, {
    names:"Helia",
    age: 15
},{
    names:"Vanilde",
    age: 45
},{
    names:"Dileuza",
    age: 150
},{
    names:"Fernando",
    age: 18
}];

for (i = 0; i < people.length; i++){
    checkAge(people[i].names, people[i].age);
}

function getLenght(word) {
    return word.length;
}

let number = getLenght("Hello World");

if (number%2 == 0){
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place");
}