const fs = require("fs");
const path = require('path');

const getParam = require("./../tools/getParam");
const existPathValidator = require("../validators/existPathValidator");

const pathFile = getParam('-o');
let stream;

const hasExistPath  = existPathValidator(
    pathFile,
    false,
);

if (!pathFile) {
    stream = false;
} else if(hasExistPath) {
    stream = fs.createWriteStream(path.join(__dirname, './../../', pathFile), {flags:'a'})
}

module.exports = stream ? stream : false;
