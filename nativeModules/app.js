// imports native js module if it exits
const util = require('util')

const name = "Shekhar";
const greeting = util.format("Hello, %s", name)
util.log(greeting)