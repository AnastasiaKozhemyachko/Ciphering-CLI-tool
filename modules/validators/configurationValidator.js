module.exports = function configurationValidator(config) {
    return config.every(item => {
        let result = true;

        const getCipher = item.substr(0,1);
        const getEncoding = item.substr(1,1);

        if(getCipher === 'C' || getCipher === 'R') {
            result = getEncoding === "0" || getEncoding === "1"
        } else if(getCipher === 'A') {
            result = !getEncoding
        } else {
            result = false;
        }

        if(!result) {
            process.stderr.write('configuration is wrong');
            process.exit(1);
        }

    })
}
