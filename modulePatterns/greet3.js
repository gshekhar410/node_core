// Pattern 3 - Replace module.exports with dynamically created new object
// Refer notes pt. 12 for explanation
function Greetr() {
  this.greeting = "hello world!!";
  this.greet =  function() {
    console.log(this.greeting)
  }
}

module.exports = new Greetr()