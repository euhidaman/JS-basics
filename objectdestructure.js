const user = { name: 'John Doe', age: 34 };

// object notation
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

// The above code is same ==>

const { name, age } = user;
// name = 'John Doe', age = 34

//-----------------------------------------

// Assign objects to variables ==>
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// The above code is same as ==>

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// here highToday & highTomorrow are the variables

//----------------------------------------------
//Nested objects destructuring
// The object is ->
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// The above code can be written as ==>

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;