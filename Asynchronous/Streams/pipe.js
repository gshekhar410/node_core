// pipe method available to all the readable stream
// pipe function return the destination back for further piping work

const fs = require('fs')

// highWatermark option limits the Buffer size 
// which helps in reducing the memory usage on the server
const readable = fs.createReadStream(__dirname + '/greet.txt',
{ encoding: 'utf8', highWaterMark: 16 * 1024 });

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.pipe(writable)

