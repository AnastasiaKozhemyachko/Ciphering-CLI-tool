const fs = require("fs");
const path = require("path");

module.exports = function existPathValidator(pathFile, isInput) {
    if(!fs.existsSync(path.join(__dirname, '..', '..', pathFile))) {
        process.stderr.write(`${isInput ? 'Input' : "Output"} directory is not exist`);
        process.exit(1);
        return false;
    } else {
        return true;
    }
}
