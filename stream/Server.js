var http = require('http');
var url = require('url')
var queryString = require('querystring');
http.createServer(function(req,res){
	req.on('data',function(data){
		console.log(data.toString());
		var newdata = queryString.parse(data);
		console.log(newdata);
	})
}).listen(8080);