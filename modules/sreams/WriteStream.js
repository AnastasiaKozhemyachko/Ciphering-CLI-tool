const fs = require("fs");
const path = require('path');

const getParam = require("./../tools/getParam");
const existPathValidator = require("../validators/existPathValidator");

const pathFile = getParam('-o');
let stream = false;

const hasExistPath = existPathValidator(
    pathFile,
    false,
);

if (!pathFile) {
    stream = process.stdout;
} else if(hasExistPath) {
    stream = fs.createWriteStream(path.join(__dirname, './../../', pathFile), {flags:'a'})
}

module.exports = stream;
