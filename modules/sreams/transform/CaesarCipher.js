const BaseTransform = require("./BaseTransform");

class CaesarCipher extends BaseTransform {
    accordanceAlphabet = "BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza";

    encoding() {
        return value => (this.accordanceAlphabet)[this.alphabet.indexOf(value)];
    }

    decoding() {
        return value => (this.alphabet)[this.accordanceAlphabet.indexOf(value)];
    }
}

module.exports = CaesarCipher;