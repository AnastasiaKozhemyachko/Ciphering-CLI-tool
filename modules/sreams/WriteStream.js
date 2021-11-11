const fs = require("fs");
const path = require('path');

const getParam = require("./../tools/getParam");
const existPathValidator = require("../validators/existPathValidator");

const pathFile = getParam('-o');

const hasExistPath  = existPathValidator(
    pathFile,
    false,
);

const stream = fs.createWriteStream(path.join(__dirname, './../../', pathFile), {flags:'a'})

module.exports = hasExistPath ? stream : false;
