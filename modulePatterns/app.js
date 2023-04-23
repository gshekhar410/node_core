const greet = require('./greet1')
greet()

const greet2 = require('./greet2')
greet2.greet()

const greet3 =  require('./greet3')
greet3.greet()
greet3.greeting = "Changed hello world!"

// Below will contain same object as require fn caches
// Hence - changed hello world! will be printed
const greet3b =  require('./greet3')
greet3b.greet()

// So to avoid above scenario in case desired
// So here we get ability to create the new object instead of getting the new object
const Greet4 = require('./greet4')
const grtr1 = new Greet4()
const grtr2 = new Greet4()
grtr1.greet()
// below will not be printed for newly created grtr object
grtr1.greeting = "Changed  greeting"
grtr2.greet()

const greet5 = require('./greet5').greet
greet5()
// We don't have any way to change the greeting value



