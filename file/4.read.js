//缺陷是要知道文件的大小

var fs = require('fs');
var buffer = new Buffer(12);
fs.open('index.txt','r',function(err,fd){
	if( err ){
		console.error(err);
	} else {
		fs.read(fd,buffer,0,6,0,function (err,bytesRead,buff){
			console.log('bytesRead:',bytesRead);
			fs.read(fd,buffer,6,6,6,function (err,bytesRead,buff){
				console.log('bytesRead:',bytesRead);
				console.log(buffer.toString());
			})
		})
	}
}) 