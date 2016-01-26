var url = require('url');
module.exports = function(app) {
	app.use(function(req, res, next) {
		var urlObj = url.parse(req.url, true);
		var pathname = urlObj.pathname;
		var query = urlObj.query;
		req.path = pathname;
		req.query = query;
		next();
	})
	app.use(function(req, res, next) {
		res.send = function(html) {
			res.writeHead(200, 'ok', {
				'Content-Type': 'text/html;charset=utf-8'
			});
			res.end(html);
		}
		next();
	})
}