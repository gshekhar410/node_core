const fs = require('fs')

// highWatermark option limits the Buffer size 
// which helps in reducing the memory usage on the server
const readable = fs.createReadStream(__dirname + '/greet.txt',
{ encoding: 'utf8', highWaterMark: 16 * 1024 });

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
  console.log(chunk.length)
  writable.write(chunk)
})