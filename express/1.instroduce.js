var express = require('express');
var app = express();

app.get('/list',function(req,res){
	res.send(req.url);
});
app.post('/list',function(req,res){
	res.send(req.url);
})
//匹配所有的方法
app.all('/all',function(req,res){
	res.send(req.url);
})
app.all('*',function(req,res){
	res.send('此页面走丢了');
})
app.listen(8080);