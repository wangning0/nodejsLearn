var fs = require('fs');
function read(pos, fd, unitSize, arr, callback) {
		var array = [];
		array = arr;
		var buffer = new Buffer(unitSize);
		fs.read(fd, buffer, 0, unitSize, pos, function(err, bytesRead) {
			pos += bytesRead;
			array.push(buffer);
			if (bytesRead > 0) {
				read(pos, fd, unitSize, array, callback);
			} else {
				var newbuf = Buffer.concat(array).slice(0, pos);
				callback(newbuf,pos);
			}
		})
	}

function copy(src,tar){
	fs.open(src,'r',function(err,fd){
		read(0,fd,3,[],function(data,pos){
			var srcBuff = data;
			fs.open(tar,'w',function(err,fdw){
				if( err ){
					console.log(err);
				}
				fs.write(fdw,srcBuff,0,pos,0,function(err,bytesWrite,buffer){
					if( err ){
						console.log(err);
					}
				})
			})
		})
	})
}
copy('index2.txt','write.txt');