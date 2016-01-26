var fs = require('fs');
/*

 * O_RDONLY 只读
 * O_SYNC 同步
 * O_RDWR 可读可写
 * O_TRUNC truncate 清空文件
 * O_CREAT 如果原来没有就创建
 * O_WRONLY 只写
 * O_EXCL excludsive 排它操作
 * O_APPEND 追加

*/
 
/*
	readFileSync(path,[options])
	path 	文件的路径
	options 可选的参数
		encoding 文件的编码
		flag
*/
var data = fs.readFileSync('index.txt',{encoding:'utf8',flag:'r'});
console.log(data);

fs.readFile('index.txt',{encoding:'utf8',flag:'r'},function(err,data){
	if ( err ){
		console.error(err);
	} else {
		console.log(data);
	}
})