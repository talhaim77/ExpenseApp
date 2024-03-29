const mongoose = require('mongoose');
const keys = require('./keys');

const connectDB = () => {
    
    mongoose.connect(keys.mongodb.dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).catch((error) => {
        console.error(`Connection error: ${error.stack}`)
        process.exit(1)
    });
}
const { connection } = mongoose;

module.exports = { connectDB, connection };