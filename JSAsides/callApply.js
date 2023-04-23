const obj = {
  name: 'Shekhar Giri',
  greet: function(arg1, arg2) {
    console.log(`Hello ${ this.name }`);
    console.log("You received theses args -> " + arg1 + ' ' + arg2)
  }
}

const param1 = 'OMG'
const param2 = 'Oh yess'
const param3 = "Oh Wow"
const param4 = "No way"

obj.greet()
// Whatever the object you provide to call, 
// the this keyword will point to it
obj.greet.call({ name: 'Shalini Giri'}, param1, param2)
obj.greet.apply({ name: "UN Giri"}, [param3, param4])