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

// class expression just like function expression.
// class definition could be inline as well
module.exports = Greetr