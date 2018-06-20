var express = require('express');
var app = express();
var http = require('http').Server(app);
var admin;

//STATIC FILES
app.use( express.static(__dirname+'/public') );

//SERVER LISTENING ON PORT 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});
