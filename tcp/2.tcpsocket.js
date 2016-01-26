var net = require('net');
var util = require('util');

var server = net.createServer(function(socket){
	console.log(socket.address());
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		console.log('客户端发送数据'+data);
		console.log('接受到的字节数:%d',socket.bytesRead);
	})
	socket.on('close',function(){
		console.log('close');
	})
	socket.on('end',function(){
		console.log('end');
	})
})

server.listen(2000,'localhost',function(){
	console.log(util.inspect(server.address()));
})