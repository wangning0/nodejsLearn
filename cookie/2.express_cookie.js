var express = require('express');
var cookieParser = require('cookie-parser');
var querystring = require('querystring');

var app = express();

app.use(function(req,res,next){
	req.cookies = querystring.parse(req.headers.cookie,'; ','=');
	req.cookie = cookie;
	next();
})

//app.use(cookieParser());

app.get('/',function(req,res){
	if( req.cookies.visited ){
		res.send('欢迎老朋友');
	} else {
		res.cookie('visited',1,{path:'/a'});
		res.send('欢迎新朋友');
	}
});
app.get('/a',function(req,res){
	console.log(res.cookie);
	if( req.cookies.visited ){
		res.send('欢迎老朋友');
	} else {
		res.cookie('visited',1,{path:'/a'});
		res.send('欢迎新朋友');
	}
});
app.get('/b',function(req,res){
	if( req.cookies.visited ){
		res.send('欢迎老朋友');
	} else {
		res.cookie('visited',1,{path:'/b'});
		res.send('欢迎新朋友');
	}
});
app.listen(8080);

function cookie(key,value,options){
	/*var opt = options || {};
	var parts = [key+'='+value];
	if( null != opt.maxAge ){
		parts.push('Max-Age='+opt.maxAge);
	}
	if( opt.domain ){
		parts.push('Domain='+opt.domain);
	}
	if( opt.path ){
		parts.push('Path='+opt.path);
	}
	if( opt.expires ){
		parts.push('Domain='+opt.expires);
	}
	if( opt.httpOnly ){
		parts.push('httpOnly');
	}
	if( opt.secure ){
		parts.push('secure');
	}
	return parts.join('; ');*/
}