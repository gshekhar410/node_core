const Emitter =  require('events')
const eventsConfig = require('./config').events

const emtr = new Emitter()


// bad practice to use strings in Events name. harder to debug
emtr.on(eventsConfig.GREET, function() {
  console.log("Somewhere someone said Hello")
})

emtr.on(eventsConfig.GREET, function() {
  console.log('A greeting occurred!');
})

emtr.emit('greet')