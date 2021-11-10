const fs = require("fs");
const getParam = require("./../tools/getParam");

const path = getParam('-o');


const writeStream = fs.createWriteStream(path);
writeStream.on('data', function (chunk) {
    console.log(chunk);
});

module.exports = writeStream;