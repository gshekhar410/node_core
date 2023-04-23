// Popular revealing module pattern
// Only expose the required stuffs. greeeting variable isn't exposed 
// outside the module
const greeting = "Hellow world!!!!"

function greet() {
  console.log(greeting)
}

module.exports = {
  greet
}