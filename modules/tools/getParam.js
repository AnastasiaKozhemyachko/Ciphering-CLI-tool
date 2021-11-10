module.exports = function getParam(param) {
    const indexOf = process.argv.indexOf(param);
    if (indexOf === -1) {
        return null;
    }
    return process.argv[indexOf + 1];
};
