var querystring = require('querystring');
var obj = querystring.parse('name=warning&age=3')
console.log(obj);
var newObj = querystring.parse('name@warning;age@3',';','@',{maxKeys:1});
console.log(newObj);