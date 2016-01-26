var Writeable = require('stream').Writable;
var util = require('util');
var fs = require('fs');

util.inherits(ConsoleStream,Writeable);

function ConsoleStream(path){
	this.path = path;
	this.fd = fs.openSync(this.path,'a+');
	Writeable.call(this);

}

ConsoleStream.prototype._write = function(data,encoding,callback){
	var a = fs.writeSync(this.fd,data,0,data.length);
	console.log(data.toString());
	callback();
}
ConsoleStream.prototype._end = function(){
	fs.fs.closeSync(this.fd);
}

var wr = new ConsoleStream('text.txt');

wr.write('王宁','utf8',function(){
	console.log('文件写入完毕');
})
wr.write('是谁','utf8',function(){
	console.log('文件写入完毕');
})
