var http = require('http');
var util = require('util');
var querystring = require('querystring');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {

	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	if (pathname == '/') {
		fs.createReadStream('./index.html').pipe(res);
	} else if (pathname == '/post') {
		var contentType = req.headers['content-type'];
		console.log('contentType',contentType);
		req.setEncoding = 'utf8';
		var result = '';
		req.on('data', function(data) {
			result += data;
		})
		req.on('end', function() {
			console.log('result',result);
			if (contentType == 'application/json') {
				var obj = JSON.parse(result);
			} else if (contentType == 'application/x-www-form-urlencoded') {
				var obj = querystring.parse(result);
			}
			res.end(util.inspect(obj));
		})
	}
}).listen(8080);