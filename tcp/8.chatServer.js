var net = require('net');
var util = require('util');
var clients = {};

var server = net.createServer({
  allowHalfOpen: true
},function(socket){

}); 
server.on('connection', function(socket) {
  var nickname;
  socket.setEncoding('utf8');
  server.getConnections(function(err, count) {
    socket.write('欢迎加入聊天室，当前在线人数' + count + ',请输入用户名\r\n>')
  })
  socket.on('data', function(data) {
    data = data.replace(/\r\n/, '');
    if (nickname) {
      breadcoast(nickname, nickname + ':' + data);
    } else {
      nickname = data;
      clients[nickname] = socket;
      breadcoast(nickname, nickname + '加入了聊天室');
    }
  })
  socket.on('end', function() {
    breadcoast(nickname, nickname + '离开了聊天室');
    clients[nickname].destroy();
    delete clients[nickname];
  })
  socket.on('error', function() {

  });
  socket.on('close', function() {
      console.log('close');
  });
})

function breadcoast(nickname, msg) {
  for (var name in clients) {
    if (name != nickname) {
      clients[name].write(msg + '\r\n');
    }
  }
}

server.listen(8080);