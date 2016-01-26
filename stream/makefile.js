var fs = require('fs');

fs.writeFile('./128k.txt',new Buffer(128*1024));