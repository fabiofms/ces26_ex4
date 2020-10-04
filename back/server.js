
const express = require('express');
const app = express();
app.use(express.static('public'));

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage});

var shopping_list = {}

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/process_get', function(req,res){
  var item = req.query.item;
  var quantity =  req.query.quantity;
  shopping_list[item] = quantity;
  res.sendFile(__dirname + '/index.html');
})

app.get('/view_list', function(req,res){
  res.json(shopping_list);
})

app.post('/process_post', urlencodedParser, function(req, res){
  response={
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  console.log(response);
  res.send(JSON.stringify(response));
})

app.post('/file_upload', upload.single('file'),
  (req,res) => res.sendFile(__dirname + '/index.html')
);

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at htpp://%s:%s', host, port);
})
