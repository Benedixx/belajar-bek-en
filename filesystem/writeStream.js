const fs = require('fs');

const writeAbleStream = fs.createWriteStream('output.txt');

writeAbleStream.write('Hello World!\n');
writeAbleStream.write('Another line\n');
writeAbleStream.write('End of line\n');
writeAbleStream.end();