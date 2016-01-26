/*
	不能根据不同的文件进行不通形式的渲染，即style.css无法进行渲染
*/
var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
	console.log(request.url);		//获取请求的url
	console.log('**********');
	//console.log(request.headers);	//获取请求头
	console.log('**********');
	console.log(request.method,request.url);	//获取方法
 
 	var myHtml = fs.readFileSync('./index.html');
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	response.write(myHtml);
	response.end();
}).listen(8080);

console.log('*******************************************************************************************************');
console.log('started');