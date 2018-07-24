const express = require('express');
const app = express();

const discovery = require('../config.js');

app.use(express.static(__dirname + '/../client/dist'));

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
