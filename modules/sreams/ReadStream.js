const fs = require("fs");
const path = require('path');
const readline = require("readline");

const getParam = require("./../tools/getParam");

const pathFile = getParam('-i');

let readStream;

if(!pathFile) {
    readStream = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
} else {
    readStream = fs.createReadStream(path.join(__dirname, './../../', pathFile), {flags:'r'});
}


readStream.on('error', function(err) {
    process.stderr.write('Input directory is not exist');
    process.exit(1);
});



module.exports = readStream;