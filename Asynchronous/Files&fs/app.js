const fs = require('fs')

// Sync call to read a 
// useful if you want to read a config file before your application loads
// Reading synchronously makes sense here
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet)

fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  // A buffer comes back by default to the callback fn
  // To recover the string data - mention character encoding in 2 parameter
  // or use toString()
  console.log(err) // null if no error is reported 
  console.log(data)
})
console.log("Done!")

// There is problem in this approach, it uses buffer to process
// the contents of file which uses heap memory

// So we should minimize the data we load into the buffer
// at any given time

// BWA - Error first callback: callbacks take an error object as 
// their first paramater

 