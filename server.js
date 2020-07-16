const express = require('express');
const app = express();
app.use('/source', express.static(__dirname + '/client/source/'));

app.get('/', function (req, res) {
  res.sendFile( __dirname +  "/client/index.html" );
});

app.listen(3000, function () {
  console.log('Server started !');
});
