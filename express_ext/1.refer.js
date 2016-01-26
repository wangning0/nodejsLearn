/*
	refer 图片防盗链

	Referer:http://image.baidu.com/search/detail?ct=5033164806881842


*/

var express = require('express');
var path = require('path');
var url = require('url');

var app = express();

app.use('/img',function(req,res,next){
	var referer = req.headers.referer;
	var hostName = url.parse(referer).hostname;
	console.log(referer);
	console.log(req.hostname);
	if( !referer || req.hostname == hostName ){
		return next();
	}else {
		res.send('只许本网站服务器使用');
	}
	
})
app.use(express.static(__dirname));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'img.html'));
})
app.listen(8080);