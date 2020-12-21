// The below code is a promise. 
// It states tht if a promise is fulfilled, it will do a certain task, else it will do some other task.
// A promise is response for a certain function, and it takes the parameters of 'resolve & reject'.
// If a promise is fulfilled, it executes the resolve part of code.
// If a promise is broken, it executes the reject part of d code.  
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

// The below code is used to handle a promise when, it's resolved.
// The then method is executed immediately after your promise is fulfilled with resolve.
// result comes from the argument given to the resolve method.
makeServerRequest.then(result => {
    console.log(result);
});

// catch is the method used when your promise has been rejected. 
// It is executed immediately after a promise's reject method is called.
// error comes from the argument given to the reject method.
makeServerRequest.catch(error => {
    console.log(error);
});