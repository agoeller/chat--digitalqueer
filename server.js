var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var admin;

//STATIC FILES
app.use( express.static(__dirname+'/public') );

//FOR THE BASIC SETUP OF THIS CODE I USED THE SOCKET.IO CHAT DEMO
//https://socket.io/get-started/chat/

//SOCKET FUNCTIONS
// function isSocketAdmin(socket){
//   var adminURL = 'http://localhost:3000/admin.html';
//   if( socket.handshake.headers.referer == adminURL ){
//     return true;
//   } else {
//     return false;
//   }
// }
//
// io.on('connection', function(socket){
//   if( isSocketAdmin(socket) ) admin = socket;
//
//   //USER SENDING MESSAGE TO ADMIN
//   socket.on('user-message',function(msg){
//     var userMessage = { id:socket.id, message:msg };
//     admin.emit('user-message',userMessage);
//   });
//
//   //ADMIN SENDING MESSAGE TO USER
//   socket.on('admin-message',function(msg){
//     io.sockets.connected[msg.id].emit('admin-message',msg.message);
//   });
//
//   socket.on('disconnect',function(){
//     if( isSocketAdmin(socket) ) admin = null;
//   });
// });


//SERVER LISTENING ON PORT 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});
