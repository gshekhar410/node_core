const fs = require('fs')
const zlib = require('zlib')

// highWaterMark option limits the Buffer size 
// which helps in reducing the memory usage on the server
const readable = fs.createReadStream(__dirname + '/greet.txt',
{ encoding: 'utf8', highWaterMark: 16 * 1024 });

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

const compressed = fs.createWriteStream(__dirname + '/greetcopy.txt.gz');

// creates a transform duplex stream which 
// allows reading and writing both
const gzip = zlib.createGzip();

readable.pipe(writable)

// BWA : Chaining: A methods returns object so we can keep calling other methods
readable.pipe(gzip).pipe(compressed)

// When writing your node code, you should move towards using async and streams in your workflows
