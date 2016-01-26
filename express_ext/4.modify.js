var fs = require('fs');
var http = require('http');

function send(filename,req,res){
	var lastModifiedTime = new Date(req.headers['if-modified-since']);
	fs.stat(filename,function(err,stat){
		if( stat.mtime.getTime() == lastModifiedTime.getTime() ){
			res.writeHead(304);
			fs.createReadStream(filename).pipe(res);
		} else {
			res.writeHead(200,{
				'Last-Modified':lastModifiedTime.toGMTString()
			})
			fs.createReadStream(filename).pipe(res);
		}
	})

}

http.createServer(function(req,res){
	if( req.url != '/favicon.ico' ){
		var filename = req.url.slice(1);
		send(filename,req,res);
	} else {
		res.end('404');
	}
}).listen(8080);