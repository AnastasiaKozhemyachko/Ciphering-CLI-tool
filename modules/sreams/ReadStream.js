const fs = require("fs");
const getParam = require("./../tools/getParam");

const path = getParam('-i');

const readStream = fs.createReadStream(path, "utf8");
readStream.on('data', function (chunk) {
    console.log(chunk);
});

module.exports = readStream;