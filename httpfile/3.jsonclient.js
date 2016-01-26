var http = require('http');

var options = {
	postname:'localhost',
	port:8080,
	method:'POST',
	path:'/',
	headers:{
		'Content-Type':'application/json'
	}
}

var request = http.request(options,function(res){
	res.setEncoding = 'utf8';
	var result = '';
	res.on('data',function(data){
		result += data;
	})
	res.on('end',function(){
		console.log(result);
		
	})
})

request.write(JSON.stringify({name:'wangning'}));
request.end();