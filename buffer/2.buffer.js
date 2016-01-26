var buf1 = new Buffer(3);
buf1[0] = 0x61;
buf1[1] = 0x62;
buf1[2] = 0x63;
var buf2 = new Buffer([0x61,0x62,0x63]);
var buf3 = new Buffer('abc');
console.log(buf1.toString());
console.log(buf2.toString());
console.log(buf3.toString());

var buffer = new Buffer(12);
buffer.write('王宁',0,6);
buffer.write('你好',6,6);
console.log(buffer.toString());

var string = new Buffer('王宁你好');
var buff1 = buffer.slice(0,7);
var buff2 = buffer.slice(7);
console.log(buff1.toString());	//会出问题，有一个字节不能和其他两个字节凑起来
console.log(buff2.toString());

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();	//实例化的原因是因为不能互相影响，要把没有处理的字节暂时相对应的存储起来

console.log(decoder.write(buff1));	//可以处理这种情况 利用string_decoder模版
console.log(decoder.write(buff2));

//buffer的拷贝
var srcbuf = new Buffer([1,2,3]);
var tarbuf = new Buffer(12);
tarbuf.fill(0);
console.log(tarbuf);
srcbuf.copy(tarbuf,0,0);	//tarbuf tarbuf的起始位置 srcbuf的起始位置 srcbuf的终止位置，默认为全部
console.log(tarbuf);

var buff3 = new Buffer([1,2,3]);
var buff4 = new Buffer([4,5,6]);
var buff5 = Buffer.concat([buff3,buff4]);
console.log(buff5);






