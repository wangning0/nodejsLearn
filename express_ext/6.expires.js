var fs = require('fs');
var http = require('http');
var crypto = require('crypto');

function send(filename,req,res){
	fs.readFile(filename,function(err,data){
		var expires = new Date(Date.now() + 10*1000);
		res.setHeader(
			'Expires',expires
		);
		res.setHeader(
			'Cache-Control','max-age=10'
		);
		res.end(data);
	})
}
function getHash(str){
	var hash = crypto.createHash('sha1');
	return hash.update(str).digest('hex');
}

http.createServer(function(req,res){
	if( req.url != '/favicon.ico' ){
		var filename = req.url.slice(1);
		send(filename,req,res);
	} else {
		res.end('404');
	}
}).listen(8080);
