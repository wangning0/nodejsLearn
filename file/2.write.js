var fs = require('fs');
/*
	异步的方式把字符串写入文件
	[opions]
		path
		encoding
		mode 		权限位   -代表文件 d代表文件夹
			read r write w execute
			读		写 		可执行
			4		2		1
			rw = 6
			rwx = 7
			-rw-	自己创建者拥有的权限
			r--		所属组
			r--		其他人
*/
//写文件
fs.writeFile( 'index1.txt','hahaha', {encoding:'utf8',flag:'w'}, function(err){
	if( err ){
		console.log(err);
	}
});
//写文件 flag为a
fs.writeFile('index1.txt',new Buffer('第二行'),{encoding:'utf8',flag:'a'},function(err){
	if( err ){
		console.log(err);
	}
})
//追加文件
fs.appendFile('index1.txt',new Buffer('第三行'),function(err){
	if( err ){
		console.log(err);
	}
})

/*
	base64
	base64是把3个8位字节 转换成4个6位字节 然后在6位字节前补两个0

	6位字节限制了大小范围为0-63 都可以用ascii码进行表示


*/
function a(str,radix){
	console.log(parseInt(str,radix));
}
function b(num){
	console.log(num.toString(2));
}
var buf = new Buffer('王');
console.log(buf);
//<Buffer e7 8e 8b>
a('e7',16);
a('8e',16);
a('8b',16);
b(231);
b(142);
b(139);
//00111001 00111000 00111010 00001011
a('00111001',2);
a('00111000',2);
a('00111010',2);
a('00001011',2);
//57 56 58 11
var str = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
str += str.toLowerCase();
str += '0123456789';
str += '+/';
console.log(str[57]+str[56]+str[58]+str[11]);


/*function base64(str){
	var buf = new Buffer(str);

	var string = '';
	buf.forEach(function(value,index){
		console.log(value.toString(2));
		string += value.toString(2);
	})
	console.log(string);
	
	console.log(string);
	console.log(buf);
}
base64('a');*/






