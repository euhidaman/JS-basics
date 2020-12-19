/*
const myFunc = function () {
    const myVar = "value";
    return myVar;
}

// The above function is same as ==>

const myFunc = () => {
    const myVar = "value";
    return myVar;
}

// Both of the above functions are same as ==>

const myFunc = () => "value";

*/
//---------------------------------------------------------------------//
//---------------------------------------------------------------------//

//Question --> Convert the below code to a one-line arrow function ==>
// Arrow function without parameters
var magic = function () {
    return new Date();
};

// Answer -->

const magic = () => new Date();

//Question --> Convert the below code to an arrow function ==>
// Arrow function with parameters
var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//Answer ==>
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));