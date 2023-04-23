const Greetr = require('./greetr')

const greeter1 = new Greetr();

greeter1.on('greet', function(name) {
  console.log("Someone Greeted: " + name)
})

greeter1.greet('Shekhar')