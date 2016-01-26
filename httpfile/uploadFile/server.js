var http = require('http');
var fs = require('fs');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
var formidable = require('formidable');

var app = http.createServer(function(req,res){
	var urlObj = url.parse(req.url,true);
	var pathname = urlObj.pathname;
	if( pathname == '/' ){
		fs.createReadStream('./index.html').pipe(res);
	} else if( pathname == '/post' ){
		var form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			console.log(files);
			console.log(fields);

			res.end('hello!');
		});
		form.uploadDir = "./file";
		
	} else {
		res.end('404');
	}
})

app.listen(8080,function(){
	console.log('server started');
})