var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello Facebook!')
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})