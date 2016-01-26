var http = require('http');
var url = require('url');
var articles = {
	'1':'第一篇文章',
	'2':'第二篇文章',
	'3':'第三篇文章'
}
http.createServer(function(req,res){
	var urlObj = url.parse(req.url,true);
	var pathname = urlObj.pathname;
	var query = urlObj.query;
	if( pathname == '/' ){
		send('<ul><li><a href="/article?id=1">第一篇文章</a></li><li><a href="/article?id=2">第二篇文章</a></li><li><a href="/article?id=3">第三篇文章</a></li></ul>');
	}else if( pathname == '/article' ){
		send(articles[query.id])
	} else{
		res.end('404');
	}
		//公共业务逻辑
	function send(html){
		res.writeHead(200,'ok',{'Content-Type':'text/html;charset=utf-8'});
		res.end(html);
	}
}).listen(8080,function(){
	console.log('server started');
})