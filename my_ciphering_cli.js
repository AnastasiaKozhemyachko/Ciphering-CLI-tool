const { pipeline } = require("stream");

const createCiphers = require("./modules/tools/createCiphers");

const readStream = require("./modules/sreams/ReadStream");
const writeStream = require("./modules/sreams/WriteStream");

const createCiphersArray = createCiphers();

pipeline(
    readStream,
    ...createCiphersArray,
    writeStream,
    err => {
        if(err) {
            process.stderr.write('Error');
            process.exit(1);
        }
    }
)