var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({
	cookie:{maxAge:60*1000},
	secret:'wangning',
	resave:true,
	saveUninitialized:true
}));

app.get('/',function(req,res){
	if( req.session.sign ){
		req.session.count++;
		res.send('hello'+req.session.name+'第'+req.session.count+'次登陆');
	} else {
		req.session.sign = true;
		req.session.name = 'wangning';
		req.session.count = 0;
		res.send('hello');
	}
})

app.listen(8080);