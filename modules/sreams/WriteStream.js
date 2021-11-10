const fs = require("fs");
const path = require('path');

const getParam = require("./../tools/getParam");

const pathFile = getParam('-o');

let writeStream;

if(fs.existsSync(path.join(__dirname, './../../', pathFile))) {
    writeStream = fs.createWriteStream(path.join(__dirname, './../../' , pathFile), {flags:'a'})
} else {
    process.stderr.write('Output directory is not exist');
    process.exit(1);
}

module.exports = writeStream;