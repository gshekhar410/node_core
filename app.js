console.log("hello app")
// As soon as you require the greet module, the entire 
// code in greet module is run in this file in that instance
// however executed code from greet module cannot access any
// app module variables directly
const greet = require('./greet')
greet()