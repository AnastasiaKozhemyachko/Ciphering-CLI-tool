const BaseTransform = require("./BaseTransform");

class Rot8Cipher extends BaseTransform {
    accordanceAlphabet = "IJKLMNOPQRSTUVWXYZABCDEFGHijklmnopqrstuvwxyzabcdefgh";

    encoding() {
        return value => (this.accordanceAlphabet)[this.alphabet.indexOf(value)];
    }

    decoding() {
        return value => (this.alphabet)[this.accordanceAlphabet.indexOf(value)];
    }
}

module.exports = Rot8Cipher;