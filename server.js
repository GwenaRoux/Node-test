const express = require('express');
const app = express();
const data = [{"todo" : "yes"}, {"todo" : "no"}, {"todo" : "maybe"}, {"todo" : "idk"}];
app.use('/source', express.static(__dirname + '/client/source/'));

app.get('/', function (req, res) {
  res.sendFile( __dirname +  "/client/index.html" );
});

app.get('/api/todo', function (req, res) {
 res.json(data);
});

app.listen(3000, function () {
  console.log('Server started !');
});
