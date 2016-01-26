var fs = require('fs');
var PassThrough = require('stream').PassThrough;

fs.createReadStream('password.txt').pipe(new PassThrough()).pipe(fs.createWriteStream('password-through'));
read