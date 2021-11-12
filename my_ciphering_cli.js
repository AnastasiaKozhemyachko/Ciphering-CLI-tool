const { pipeline } = require("stream");

const createCiphers = require("./modules/tools/createCiphers");

const readStream = require("./modules/sreams/ReadStream");
const writeStream = require("./modules/sreams/WriteStream");

const createCiphersArray = createCiphers();

pipeline(
    readStream || process.stdin,
    ...createCiphersArray,
    writeStream || process.stdout,
    err => {}
)
