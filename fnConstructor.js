function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

let john = new Person('John', 'Doe')

let jane = new Person("Jane", 'Doe')

// here john object's prototype will point to the Function used
// to contruct the object. i.e. Person.

// So if we add a function to Person function's prototype,
// the same function will be available to use for john object
// due to prototypal inheritance(Prototypal chain)

Person.prototype.greet = function() {
  console.log("Hello " + this.firstname + ' ' +this.lastname)
}

john.greet()
jane.greet()

// We can check the prototype of an object with 
// obj.__proto__

console.log(john.__proto__)
console.log(jane.__proto__)
console.log(john.__proto__ === jane.__proto__)