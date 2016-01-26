//不知道文件大小
var fs = require('fs');

fs.open('index2.txt','r',function (err,fd){
	var list = [];	//连接buffer
	read(0,fd,3,list,function(data){
		console.log(data.toString());
	})
})
fs.open('index.txt','r',function (err,fd){
	var arr = [];
	read(0,fd,5,arr,function(data){
		console.log(data.toString());
	})
})
function read(pos,fd,unitSize,arr,callback){
	var array = [];
	array = arr;
	var buffer = new Buffer(unitSize);
	fs.read(fd,buffer,0,unitSize,pos,function (err,bytesRead){
		pos += bytesRead;
		array.push(buffer);
		if( bytesRead > 0 ){
			read(pos,fd,unitSize,array,callback);
		} else {
			var newbuf = Buffer.concat(array).slice(0,pos);
			callback(newbuf);
		}
	})
}