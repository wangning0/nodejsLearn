var net = require('net');
var util = require('util');

var server = net.createServer({allowHalfOpen:false,pauseOnConnect:false},function(socket){
	console.log(util.inspect(socket.address()));
	server.getConnections(function(err,count){
		console.log(count);
	});
	socket.on('error',function(err){
		console.log(err);
		socket.destroy();
	})
	socket.on('data',function(data){
		console.log(data.toString());
	})
})

server.on('error',function(err){
	console.log(err);
})
server.on('close',function(){
	console.log('服务器关闭');
})
server.listen(8080,'0.0.0.0',511,function(){
	console.log(util.inspect(server.address()));
	setTimeout(function(){
		server.close();		//会等客户端全部断开连接后再关闭
	},1000)
})