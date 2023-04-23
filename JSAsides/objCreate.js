// A way to setup prototypal inheritance for new created object
// with object.create syntax

const person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

const john = Object.create(person)
john.firstname = 'John';
john.lastname = 'Doe';

const jane = Object.create(person)
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet())
console.log(jane.greet())