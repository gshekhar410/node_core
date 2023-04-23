const EventEmitter = require('events')
const util = require('util')

function Greetr() {
  EventEmitter.call(this)
  this.greeting = "Hello World!";
}

// Imp syntax
// util.inherits only connects the methods and 
// properties available over the prototype and does not 
// It never runs and makes the propeties that are directly 
// associated to the new object created from Fatory fn
// Explanation app2.js
util.inherits(Greetr, EventEmitter)

Greetr.prototype.greet = function(name) {
  console.log(this.greeting);
  this.emit('greet', name);
}

const greeter1 = new Greetr();
// We can also pass data to listener function like below
greeter1.on('greet', function(name) {
  console.log(`Someone greeted: ${name}`)
})

greeter1.greet("Shekhar");