module.exports = function configurationValidator(config) {

    return config.every(item => {
        const getCipher = item.substr(0,1);
        const getEncoding = item.substr(1,1);

        if(!getCipher) {
            return false;
        }

        if(getCipher === 'C' || getCipher === 'R') {
            return getEncoding === "0" || getEncoding === "1"
        }

        if(getCipher === 'A') {
            return !getEncoding
        }
        return false;
    })
}
