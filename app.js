const express = require('express');
const { app } = require('./server/server');
const bodyParser = require('body-parser');
const { response } = require('express');
const api = require('./api/api');

app.use(express.json({ extended: false }));
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

// app.listen(3000, () => {
//   console.log('listens on port 3000');
// });

app.use('/api', api);

app.get("/", async (request, response) => {
  response.send("try");
})

module.exports = app