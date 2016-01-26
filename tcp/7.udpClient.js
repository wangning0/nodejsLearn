var dgram = require('dgram');

var socket = dgram.createSocket('udp4');

var buffer = new Buffer('王宁是谁');



socket.send(buffer,0,buffer.length,8080,'localhost',function(err,bytes){
	console.log('字节数为：'+bytes);
})
socket.on('message',function(msg,rinfo){
	console.log(msg.toString());
	console.log(rinfo);
})