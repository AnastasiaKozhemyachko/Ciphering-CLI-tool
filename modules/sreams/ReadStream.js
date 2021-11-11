const fs = require("fs");
const path = require('path');

const getParam = require("./../tools/getParam");
const existPathValidator = require("../validators/existPathValidator");

const pathFile = getParam('-i');

const hasExistPath  = existPathValidator (
    pathFile,
    true,
    );

const stream = fs.createReadStream(path.join(__dirname, './../../', pathFile), {flags:'r'})

module.exports = hasExistPath && stream;
