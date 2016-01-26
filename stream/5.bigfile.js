var fs = require('fs');

var src = fs.createReadStream('dest.txt');
var tar = fs.createWriteStream('dest2.txt');

src.on('data',function(data){
	var flag = tar.write(data);
	/*console.log(flag);*/
})
//当可写流里的缓存区全部写入目标文件时触发该事件
tar.on('drain',function(){
	console.log('over');
})