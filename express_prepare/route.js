var articles = {
	'1':'第一篇文章',
	'2':'第二篇文章',
	'3':'第三篇文章'
};
var fs = require('fs');
module.exports = function(app) {
	app.use('/list', function(req, res) {
		fs.createReadStream('./index.html').pipe(res);
	});
	app.use('/article', function(req, res) {
		//res.send(articles[req.query.id])
		fs.readFile('./detail.html','utf8',function(err,data){
			console.log(data);
			data = data.replace('<%=content%>',articles[req.query.id]);
			res.send(data);
		})
	});
	app.use(function(req, res) {
		res.end('404');
	})
}