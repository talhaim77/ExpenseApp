const express = require('express')
const { connection, connectDB } = require('../database/connection');
const path = require('path');
const app = express();

connectDB();

connection.once('open', function () {
    console.log('Connected to MongoDB');
    launchServer();
});

const launchServer = () => {
    app.use(express.static('public'));
    var PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log('listens on port ' + PORT);
    });
};

module.exports = {
    app,
    express,
    path,
};