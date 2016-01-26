var express = require('express');
var path = require('path');
var app = express();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');

app.set('view engine','html');
app.use(express.static(path.join(__dirname,'public'),{
	dotfiles:'deny',
	index:'inx.html',
	setHeaders:function(res,path,info){
		res.setHeader('name','wangning');
	}
}));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.raw());
app.post('/post',function(req,res){
	res.send(req.body);
})
app.engine('html',ejs.__express);
app.set('views',path.join(__dirname,'/html'));
app.get('/index',function(req,res){
	res.render('index',{
		name:'wangning',
		age:19
	})
})
app.all('*',function(req,res){
	console.log(req.path);
})
app.listen(8080); 