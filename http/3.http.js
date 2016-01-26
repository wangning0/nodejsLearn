//引用url模块
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');

http.createServer(function(req,res){
	console.log(req.method,req.url);
	//true 表示将query转成对象
	var urlObj = url.parse(req.url,true);
	var p = urlObj.pathname;
	console.log(urlObj.query.wang);
	if( p == '/' ){
		fs.readFile('index.html','utf-8',function(err,data){
			if( err ){
				console.error(err);
			} else {
				res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
				res.write(data);
				res.end();
			}
		})
	} else if( p == '/clock' ){
		res.write(new Date().toString());
		//res.end();
	}
	else {
		static(p,res);
	}

	function static(url,res){
		fs.readFile(url.slice(1),'utf-8',function(err,data){
			if(err){
				console.error(err);
			} else{
				res.writeHead(200,{'Content-type':mime.lookup(url)+';charset=utf-8'});
				res.write(data);
				res.end();
			}
		})
	}

}).listen(8080);

console.log('started');
