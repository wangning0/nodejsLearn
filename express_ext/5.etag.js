var fs = require('fs');
var http = require('http');
var crypto = require('crypto');

function send(filename,req,res){
	var lastEtag = req.headers['if-none-match'];
	var fileEtag = getHash(fs.readFileSync(filename));
	if( lastEtag == fileEtag ){
		res.writeHead(304);
		fs.createReadStream(filename).pipe(res);
	} else {
		res.writeHead(200,{
			'ETag':fileEtag
		});
		fs.createReadStream(filename).pipe(res);
	}
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
