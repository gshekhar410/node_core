  'use strict'

  class Person {
    constructor(firstname, lastname) {
      // methods and properties added inside constructor are
      // added to each object created with the class
      this.firstname = firstname;
      this.lastname = lastname;
    }

    // methods created in the class are automatically put in the
    // prototype of the created object from it.
    greet() {
      console.log("Hello, " + this.firstname + ' ' + this.lastname)
    }
  }

  var john = new Person('John', 'Doe')
  john.greet()
  
  var jane = new Person("Jane", 'Doe')
  jane.greet()

  console.log(john.__proto__)
  console.log(jane.__proto__)
  console.log(john.__proto__ === jane.__proto__)