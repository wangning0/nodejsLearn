var net = require('net');

var client = new net.Socket();

client.setEncoding('utf8');

client.connect(2000,'localhost',function(){
	client.write('Hello');
	client.on('data',function(data){
		console.log(data);
	})
})