var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
  // if below statement is excluded then Policeman will
  // not be initialised to its firstname & lastname
	Person.call(this);
	this.badgenumber = '1234';
}

// below statement only makes available the properties
// methods available over the prototypenode 
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();