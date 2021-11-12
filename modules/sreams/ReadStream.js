const fs = require("fs");
const path = require('path');

const getParam = require("./../tools/getParam");
const existPathValidator = require("../validators/existPathValidator");

const pathFile = getParam('-i');
let stream;

const hasExistPath  = existPathValidator (
    pathFile,
    true,
);

if (!pathFile) {
    stream = false;
} else if(hasExistPath) {
    stream = fs.createReadStream(path.join(__dirname, './../../', pathFile), {flags:'r'})
}

module.exports = stream ? stream : false;
