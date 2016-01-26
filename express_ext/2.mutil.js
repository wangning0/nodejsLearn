var express = require('express');
var path = require('path');

var app = express();
//Accept-Language:zh-CN,zh;q=0.8,en;q=0.6

function checkLangulages (languages){
	function parse(str){
		return str.toLowerCase().split(',').map(function(language){
			var parts = language.split(';');
			if( parts[1] ){
				parts[1] = parts[1].split('=')[1];
			} else {
				parts[1] = 1;
			}
			return {name:parts[0],q:parts[1]};
		}).filter(function(language){
			return languages.indexOf(language.name) != -1;
		}).sort(function(pre,after){
			return after.q-pre.q
		}).map(function(item){
			return item.name;
		})
	}
	return function(req,res,next){
		req.acceptLanguages = parse(req.headers['accept-language'])[0] || languages[0];
		next();
	}
}

app.use(checkLangulages(['zh','en']));
app.get('/',function(req,res){
	res.setHeader('Content-Language',req.acceptLanguages);
	res.sendFile(path.join(__dirname,req.acceptLanguages,'index.html'));
})
app.listen(8080);