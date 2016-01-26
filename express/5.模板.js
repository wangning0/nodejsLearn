var express = require('express');
var path = require('path');
var app = express();
var ejs = require('ejs');
var fs = require('fs');

app.set('view engine','html');
app.use(express.static(path.join(__dirname,'public'),{
	dotfiles:'deny',
	index:'inx.html',
	setHeaders:function(res,path,info){
		res.setHeader('name','wangning');
	}
}));
//express.static的用法
/*app.use(function(req,res,next){
	var rs = fs.createReadStream(path.join(__dirname,'public',req.path));
	rs.on('error',function(){
		console.log('404');
		next();
	})
	rs.pipe(res);
})*/
app.engine('html',ejs.__express);
app.set('views',path.join(__dirname,'/html'));

app.get('/index.html',function(req,res){
	res.render('index',{
		name:'wangning',
		age:19
	})
})
app.all('*',function(req,res){
	console.log(req.path);
})
app.listen(8080); 