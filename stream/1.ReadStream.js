/*
	fs.createReadStream(path,[options])
	options
		highWaterMark	最高水位线  默认为64KB
		start 			字节数开始位置	
		end 			字节数结束位置
		encoding 		编码格式
		flag 			何种操作
		autoClose  		读完数据后是否关闭文件描述符

*/
/*
	可以监听
		error   错误
		open 	文件打开
		close 	文件关闭
		data 	文件开始获取数据
		change 	文件改变
		stop 	
		end 	文件读取数据完毕
*/

var fs = require('fs');

var rs = fs.createReadStream('./128k.txt',{});
rs.on('open',function(){
	console.log('open');
})
rs.on('data',function(data){
	console.log(data.length);
})
rs.on('end',function(){
	console.log('end');
})
rs.on('close',function(){
	console.log('close');
})
rs.on('error',function(err){
	console.log('错误',err);
})






