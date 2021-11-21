const stream = require('stream');

class BaseTransform extends stream.Transform {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    isEncoding = 0;

    constructor(opt) {
        super(opt)
        if(opt) {
            this.isEncoding = !!Number.parseInt(opt);
        }
    }

    _transform(chunk, encoding, callback) {
        const searchValue = /[A-Z]/gi;
        try {
            const resultString = chunk.toString('utf8').replace(searchValue, this.isEncoding ? this.encoding() : this.decoding())
            callback(null, resultString);
        } catch (err) {
            callback(err);
        }
    }

    encoding() {}
    decoding() {}
}

module.exports = BaseTransform;