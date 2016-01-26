/*
	open
	fs.open(path, flags, mode, callback_);
*/

var fs = require('fs');

fs.open('index.txt','r',function (err,fd){
 	if( err ){
 		console.log(err);
 	} else {
 		var buffer = new Buffer(3);
 		fs.read(fd,buffer,0,3,function (err,bytesRead,buff){
 			if( err ){
 				console.log(err);
 			} else{
 				console.log(buff);
 			}
 		})
 		console.log(buffer.toString());
 	}
 }) 

/*
	fs.read(fd, buffer, offset, length, position, callback);
	fd 		文件描述符
	buffer 	存放数据的容量
	offset 	buffer内的偏移量
	length 	读取文件的长度 注意的是文件的长度不能超过buffer的长度
	position 读取文件的位置
	callback 回调函数
*/