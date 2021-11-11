const duplicateValidator = require('./../validators/duplicateValidator');

module.exports = function getParam(param) {

    duplicateValidator(process.argv, param);

    const indexOf = process.argv.indexOf(param);
    if (indexOf === -1) {
        return null;
    }
    return process.argv[indexOf + 1];
};
