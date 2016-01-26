var http = require('http');
var querystring = require('querystring');
var options = {
	hostname:'localhost',
	port:8080,
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'
	},
	path:'/'
};

var request = http.request(options,function(res){
	res.setEncoding = 'utf8';
	var results = '';
	res.on('data',function(data){
		results += data;
	})
	res.on('end',function(){
		console.log(results);
	})
});

request.write(querystring.stringify({'name':'wangning'}));
request.end();

