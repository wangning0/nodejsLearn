var http = require('http');
var connect = require('./2.connect.js');
var url = require('url');

var app = connect();
require('./middle.js')(app);
require('./route.js')(app);

app.listen(8080);
