var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('./3.fileStore')(session);

var app = express();

app.use(cookieParser());
app.use(session({
	cookie:{maxAge:60*1000},
	secret:'wangning',
	resave:true,
	saveUninitialized:true,
	store:new FileStore('./sessions/')
}));

app.get('/save',function(req,res){
	req.session.name = 'wn';
	res.send('end');
})
app.get('/read',function(req,res){
	res.send(req.session.name);
})

app.listen(8080);