const getParam = require("./../tools/getParam");
const CaesarCipher = require('./../sreams/transform/CaesarCipher');
const Rot8Cipher = require('./../sreams/transform/Rot8Cipher');
const AtbashCipher = require('./../sreams/transform/AtbashCipher');
const configurationValidator = require('./../validators/configurationValidator');

const config = getParam('-c');

module.exports = function createCiphers() {
    const arrayOfConfig = config.split('-');

    if(!configurationValidator(arrayOfConfig)) {
        process.stderr.write('configuration is wrong');
        process.exit(1);
    }

    const arrayOfCiphers = [];

    for (let item of arrayOfConfig) {
        const getCipher = item.substr(0,1);
        const getEncoding = item.substr(1,1);

        switch (getCipher) {
            case 'C':
                arrayOfCiphers.push(new CaesarCipher(getEncoding))
                break;
            case 'R':
                arrayOfCiphers.push(new Rot8Cipher(getEncoding))
                break;
            case 'A':
                arrayOfCiphers.push(new AtbashCipher(1))
                break;
            default:
                break;
        }
    }

    return arrayOfCiphers;
};
