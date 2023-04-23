// Default Character encoding in buffer is utf8

const buf = new Buffer("Hello", 'utf8');
console.log(buf)
console.log(buf.toString())
console.log(buf.toJSON())

buf.write('wo')
console.log(buf.toString())

// In practical world you will not create Buffers for yourself
// and rather data in form of buffer to work on

// Buffers are deprecated due to security concerns
// Use ArrayBuffer

// Size in bytes
const buf2 = new ArrayBuffer(8)
// create view to work with binary data stored in ArrayBuffer
const view = new Int32Array(buf2)

view[0] = 5;
view[1] = 15;
console.log(view)