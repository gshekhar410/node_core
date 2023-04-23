const Emitter = require('./emitter')
const emtr = new Emitter();
// There can be more than 1 listeners attached to an event
emtr.on('greet', function() {
  console.log("Somewhere someone said Hello")
})

emtr.on('greet', function() {
  console.log('A greeting occurred!');
})

emtr.emit('greet')
emtr.emit('greet')
 