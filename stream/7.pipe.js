var fs = require('fs');
var src = fs.createReadStream('src.txt');
var tar = fs.createWriteStream('tar.txt');

src.pipe(tar);