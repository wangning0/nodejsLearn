var express = require('express');
var app = express();

app.use(function(req,res,next){
	console.log('中央');
	req.mny = 100;
	next();
})
app.use(function(req,res,next){
	console.log('省');
	req.mny = req.mny - 10;
	next('钱丢了');
})
app.use(function(req,res,next){
	console.log('村');
	req.mny = req.mny - 80;
	next();
})

app.all('*',function(req,res){
	console.log('农民');
	res.send(''+req.mny);
})
app.use(function(err,req,res,next){
	console.log('错误处理中间件');
	console.log(err);
})

app.listen(8080);