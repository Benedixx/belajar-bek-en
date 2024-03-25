const fs = require('fs');

const readAbleStream = fs.createReadStream('notes.txt', {highWaterMark: 10});

readAbleStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

readAbleStream.on('end', () => {
    console.log('End of file');
});