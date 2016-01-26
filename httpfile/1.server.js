var http = require('http');

http.createServer(function(req,res){
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);
	res.end('hello!');
}).listen(8080,function(){
	console.log('server started');
})