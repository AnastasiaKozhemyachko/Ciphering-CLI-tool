const { pipeline } = require("stream");

const createCiphers = require("./modules/tools/createCiphers");

const readStream = require("./modules/sreams/ReadStream");
const writeStream = require("./modules/sreams/WriteStream");

const createCiphersArray = createCiphers();


//path.join(__dirname),

pipeline(
    readStream,
    ...createCiphersArray,
    writeStream,
    err => {}
)