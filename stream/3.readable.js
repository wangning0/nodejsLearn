/*
	暂停模式
	先流入一个缓存区，再从缓存区内读取数据
*/

var fs = require('fs');
var rs = fs.createReadStream('128k.txt');
var arr = [];
rs.on('readable',function(){
	var data;
	while( null != (data = rs.read()) ){
		arr.push(data);
		console.log(data.length);
	}
});
rs.on('end',function(){
	console.log(Buffer.concat(arr).length);
})