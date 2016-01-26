/*
	可以根据不同的文件进行不通形式的渲染
*/
/*var http = require('http');
var fs = require('fs');
var mime = require('mime');

http.createServer(function(request,response){
	console.log(request.url);		//获取请求的url
	console.log('**********');
	//console.log(request.headers);	//获取请求头
	console.log('**********');
	console.log(request.method,request.url);	//获取方法
 	
 	var url = request.url;

 	if( url == '/' ){
 		fs.readFile('./index.html',function(err,data){
 			if( err ){
 				console.error(err);
 			} else {
 				response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
 				response.write(data);
 				response.end();
 			}
 		})
 	} else {
 		static(url,response);
 	}
 	
 	function static(url,response){
 		var staticFileName = url.slice(1);
 		fs.readFile(staticFileName,function(err,data){
 			if(err){
 				console.log(err);
 			}else {
 				response.writeHead(200,{'Content-Type':mime.lookup(url)+';charset=utf-8'});
	 			response.write(data);
	 			response.end();
 			}

 		})
 	}

}).listen(8080);

console.log('*******************************************************************************************************');
console.log('started');*/

var http = require('http');
var fs = require('fs');
var mime = require('mime');

http.createServer(function(req,res){
	console.log(req.method,req.url);
	var url = req.url;
	if( url == '/' ){
		fs.readFile('index.html','utf-8',function(err,data){
			if( err ){
				console.error(err);
			} else {
				res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
				res.write(data);
				res.end();
			}
		})
	} else {
		static(url,res);
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

