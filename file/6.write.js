var fs = require('fs');
var buffer = new Buffer('王宁是谁');
fs.open('write.txt', 'w', function(err, fd) {
	fs.write(fd, buffer, 6, 6, 0, function(err, bytesWrite) {
		console.log('bytesWrite', bytesWrite);
		fs.write(fd, buffer, 0, 6, 6, function(err, bytesWrite) {
			console.log('bytesWrite', bytesWrite);
		});
	});
})