module.exports = function duplicateValidator(argv, param) {
    const withoutDuplicate = argv.filter(item => item === param);

    if(withoutDuplicate.length > 1) {
        process.stderr.write('There are duplicate');
        process.exit(1);
    }
}
