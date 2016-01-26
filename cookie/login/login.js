var express = require('express');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');

var app = express();
app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',ejs.__express);

app.use(cookieParser('wangning'));	//加入的数据为加密 加密后的cookie放在signedCookies

app.get('/',function(req,res){
	res.render('index');
})
app.get('/login.html',function(req,res){
	res.render('login');
})
app.get('/login',function(req,res){
	res.cookie('username',req.query.username,{signed:true});
	res.redirect('/user');
	/*重定向的实现方法
	res.statusCode = 302;
	res.setHeader('location','/user');
	res.end();*/
})
app.get('/user',checkLoginOrNot,function(req,res){
	res.render('user',{
		username:req.signedCookies.username
	})
})
app.listen(8080);

function checkLoginOrNot(req,res,next){
	if( req.signedCookies && req.signedCookies.username ){
		next();
	} else {
		res.redirect('/');
	}
}
