const fs = require("fs");
const path = require('path');

const getParam = require("./../tools/getParam");
const existPathValidator = require("../validators/existPathValidator");

const pathFile = getParam('-i');
let stream = false;

const hasExistPath = existPathValidator(
    pathFile,
    true,
);

if (!pathFile) {
    stream = process.stdin;
} else if(hasExistPath) {
    stream = fs.createReadStream(path.join(__dirname, './../../', pathFile), {flags:'r'})
}

module.exports = stream;
