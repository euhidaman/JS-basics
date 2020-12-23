/*
    01: 46 - Var, Let, Const
        * Var: the variable defined is visible in the entire function.
    * Let: the variable defined is visible only in the block it is defined in.
    * Const: makes the variable a constant
    * Use const over let and let over var wherever possible
// ------------------------------------------------------------------------------------------------------------
    05: 40 - Objects
        * const person = {
            "name": "Mosh",
            walk() { },
            talk() { }
        }
Above is an object with 1 property and 2 methods.
Another way defining a method member in an object is:
walk: function() { } //not recommended
   	* Invoking method of an object: person.walk()
    * Accessing property of object
        ** When the property is known in advance: person["name"]
            ** When the property is not known in advance: person[variable.value] //variable.value == "name"
//------------------------------------------------------------------------------------------------------------
        * const person = {
            "name": "Mosh",
            walk() {
                console.log(this)
            }
        }

'this' is like the __self__ method in python 
this in the function walk always refers to the object which invoked it, and by default by the global object(window)
person.walk() => the person object is printed on console, 
since the function walk is invoked by person object and thus "this" represent it here.
const walk1 = person.walk //not calling the function, only assiging variable walk1 the function walk
walk1()	=> undefined is printed since the default object is the global object and "this"  represents it here.
If strict mode is not enabled, it will return window object instead of undefine
    * All functions in JS are object which have member functions like bind.
const walk1 = person.walk.bind(person)
here bind function on walk sets the "this" in it as the reference to the object that is passed to it.
// ------------------------------------------------------------------------------------------------------------
    13: 57 - Arrow Functions
        * Different ways of declaring functions:
		** const square = function (number) { return number * number }
    ** const square = (number) => { return number * number }
		** const square = number => return number * number
    ** const 2square = () => return 4 // () is required when the function has no input parameters

//-------------------------------------------------------------------------------------------------------------
   23:00 - Array.map()
   const colors = ['red', 'green', 'blue'];
   const coloritems = colors.map(item => `<li>${item}</li>`);
   
   'item' is separate elements from the colors array 
   .map() function returns an array from an already present array
   In the code above, 'coloritems' is an array which is of the form <li>red</li>

//--------------------------------------------------------------------------------------------------------------
    - Array reduce()

    const numbers = [1,-1,2,3];

    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },0);

    console.log(sum);

        * reduce() takes two arguments--> * a callback function, which returns the value of the assigned variable
                                        * The initial value of the accumulator. (i.e, in this case, accumulator = 0 at starting)
        * The value of accumulator changes according to the previous value of the the assigned variable(in this case 'sum')
            ** accumulator = 0, currentValue = 1 --> sum = 1
            ** accumulator = 1, currentValue = -1 --> sum = 0
            ** accumulator = 0, currentValue = 2 --> sum = 2
            ** accumulator = 2, currentValue = 3 --> sum = 5


    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

        * If accumulator value is not initialized, 
        then accumulator's initial value will be the first element of the array, i.e, accumulator = 1
        Then code will run in the following fashion -->
            ** accumulator = 1, currentValue = -1 --> sum = 0
            ** accumulator = 0, currentValue = 2 --> sum = 2
            ** accumulator = 2, currentValue = 3 --> sum = 5

//--------------------------------------------------------------------------------------------------------------
  26:10 - Object Destructuring
    const address = {
        street: '',  
        city: '',
        country: ''
    };   

    * const {street, city, country } = address;
    ** is same as const street = address.street, const city = address.city, const country = address.country

//---------------------------------------------------------------------------------------------------------------
    28:56 spread operator
        const first = [1,2,3];
        const second = [4,5,6];    
        const combined = [...first, ...second];  --> this gives combined = [1,2,3,4,5,6]
        const newcombined = [...first, 'a',...second];  --> this gives newcombined = [1,2,3,'a',4,5,6]

//----------------------------------------------------------------------------------------------------------------
32:45 Classes

    class Person ={
        constructor(name){
            this.name = name;
            //'this' always returns a reference to the current object
        } 

        walk(){
            console.log(" Let's walk!! ");
        }
    }
    
    const person = new Person('Aman')
    * 'new' is a keyword, tht is used to create an object using that class

//-----------------------------------------------------------------------------------------------------------------
36:32 Inheritance

    class Person = {
        constructor(name){
            this.name = name;
            //'this' always returns a reference to the current object
        }

        walk(){
            console.log(" Let's walk!! ");
        }
    }

    // Teacher is inheriting from Person class 
    class Teacher extends Person = {
        constructor(name , degree) {
            super(name);  //super() is called to pass the value of the constructor for the parent class(i.e 'name' from Person) from the child class
            this.degree = degree;
        }

        teach() {
            console.log('teach!!');
        }
    }

    const teacher_var = new Teacher('Aman', 'Masters');

//-----------------------------------------------------------------------------------------------------------------
44:50 Named and Default exports
        Default -> import .... from '';
        Named -> import {....} from '';
        Default and named -> import .... , {....} from '';
 */   