var http = require('http');

http.createServer(function(req,res){
	console.log(req.headers.cookie);
	var time = new Date(new Date().getTime()+60*1000).toGMTString();
	/*res.writeHeader(200,{
		'Set-Cookie':'name=wangning; path=/;Expires=' + time
	});*/
	res.setHeader('Set-Cookie',['name=wangning;path=/','age=6;path=/']);
	res.end();
}).listen(8080);