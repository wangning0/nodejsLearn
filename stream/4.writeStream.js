/*
fs.createWriteStream(path,[options])
[options]
      highWaterMark 最高水位线  默认为16KB
      encoding      编码格式
      flag          何种操作
      start         开始写入的位置
      autoClose     读完数据后是否关闭文件描述符
write(chunk,encoding,callback) 
写入流的返回的对象属性有
	start
	path
	bytesWritten
	fd
	flag
	mood
	autoClose
	pos
	bytesWritten
*/
var fs = require('fs');

var rs = fs.createReadStream('src.txt',{});
var ws = fs.createWriteStream('tar.txt',{});

rs.on('data',function(data){
	ws.write(data,'utf8',function(err){
		if( err ){
			console.log(err);
		}
	})
})
rs.on('end',function(){
	ws.end('bye',function(){
		console.log(ws.path);
		console.log(ws.bytesWritten);
	})
})
