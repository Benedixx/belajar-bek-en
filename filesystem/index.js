const fs = require('fs');

const readFileCB = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
};

fs.readFile('notes.txt', 'utf8', readFileCB);