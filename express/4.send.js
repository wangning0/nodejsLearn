
var express = require('express');
var app = express();
/*
	http://localhost:8080/query?name=wa&age=1
	{"name":"wa","age":"1"}
*/
app.get('/query',function(req,res){
	res.send(req.query);
});
/*
	http://localhost:8080/article/1/3
	{"id":"1","name":"3"}
*/
app.get('/article/:id/:name',function(req,res){
	res.send(req.params);
})
//匹配所有的方法
app.all('/all',function(req,res){
	res.send(req.path+''+req.host);
})
app.all('/status',function(req,res){
	res.sendStatus(404);
})
app.all('*',function(req,res){
	res.send('此页面走丢了');
})
app.listen(8080);