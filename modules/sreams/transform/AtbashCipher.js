const BaseTransform = require("./BaseTransform");

class AtbashCipher extends BaseTransform {
    accordanceAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";

    encoding() {
        return value => (this.alphabet)[this.accordanceAlphabet.indexOf(value)];
    }
}

module.exports = AtbashCipher;