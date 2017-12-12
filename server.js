var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var admin;

// static files ---------------------
app.use( express.static(__dirname+'/public') );


// sockets stuff ---------------------

function isSocketAdmin(socket){
  var adminURL = 'http://localhost:3000/admin.html';
  if( socket.handshake.headers.referer == adminURL ){
    return true;
  } else {
    return false;
  }
}

io.on('connection', function(socket){
  console.log('a new user has connected ty');

  if( isSocketAdmin(socket) ) admin = socket;

  // user sending a message to the admin
  socket.on('user-message',function(msg){
    var userMessage = { id:socket.id, message:msg };
    admin.emit('user-message',userMessage);
  });

  // admin sending a message to the user
  socket.on('admin-message',function(msg){
    io.sockets.connected[msg.id].emit('admin-message',msg.message);
  });

  socket.on('disconnect',function(){
    if( isSocketAdmin(socket) ) admin = null;
  });

});


// server listening, shhhh -----------
http.listen(3000, function(){
  console.log('listening on *:3000');
});
