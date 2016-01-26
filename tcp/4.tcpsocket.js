var fs = require('fs');
var util = require('util');
var net = require('net');

var ws = fs.createWriteStream('./socket.txt');

var server = net.createServer({allowHalfOpen:true});

server.on('connection',function(socket){
	socket.setTimeout(10*1000);
	socket.on('timeout',function(){
		socket.resume();
		socket.pipe(ws,{end:false});
		ws.write(socket.remoteAddress);
	})
});

server.listen(2000,'localhost',function(){
  console.log(util.inspect(server.address()));
});