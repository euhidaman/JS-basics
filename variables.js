let name = 'Aman';
console.log(name);

let sum = 3+5;
console.log(sum);
console.log(typeof sum);

const interest = 2.5; // This is a constant, i.e, value doesn't change
console.log(interest);

sum = 'Changed type of sum frm number to string :';
console.log(sum);
console.log(typeof sum);
// lookup -> this is same as objects
// Objects
// This is a like a dictionary
// lookup and objects are same
let person = {
    name: 'Aman',
    age: 20
};

console.log(person);
console.log(person.name);
console.log(person.age);

// Arrays
let colors = ['pink', 'blue'];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
colors[2]='red';
colors[3]=100;
console.log(colors);
console.log(colors.length);

//functions
function greet(name){
    console.log('Hello '+ name +',from the function');
}

greet('aman'); // calling the function
greet('John');

// function 2
function square(num){
    return num * num;
}

let sq = square(3);
console.log('square of 3 : ' +sq);
console.log( 'square of 2 : ' +square(2));

