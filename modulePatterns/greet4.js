// Pattern 4   - Replace module.exports with a function constructor
// Refer notes pt. 12 for explanation
function Greetr() {
  this.greeting = "hello world!!!";
  this.greet =  function() {
    console.log(this.greeting)
  }
}

// export the Fn Constructor
module.exports = Greetr;