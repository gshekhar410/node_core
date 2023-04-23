function greet() {
  console.log("Hello world")
}

// exports keyword is also made available by NodeJS runtime
// Refer notes pt. 14 for complete explanation on using exports keyword
exports.greet = greet

console.log(exports)
console.log(module.exports)