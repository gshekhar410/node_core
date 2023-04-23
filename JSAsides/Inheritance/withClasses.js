'use strict'
const EventEmitter = require('events')

class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello world!"
  }

  greet(name) {
    console.log(this.greeting);
    this.emit('greet', name);
  }
}

const greeter1 = new Greetr();

greeter1.on('greet', function(name) {
  console.log("Someone Greeted: " + name)
})

greeter1.greet('Shekhar')