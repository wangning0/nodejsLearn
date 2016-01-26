var Duplex = require('stream').Duplex;
var util = require('util');
var fs = require('fs');

util.inherits(SecretStream,Duplex);

function SecretStream(){
	Duplex.call(this);
}

SecretStream.prototype._write = function(data,encoding,callback){
	for( var i = 0;i<data.length;i++ ){
		data[i] = 255 - data[i];
	};
	this.push(data);
	this.push(null);
}
SecretStream.prototype._read = function(){
	console.log('read');
}
var secret = new SecretStream();

fs.createReadStream('password-secret.txt').pipe(secret).pipe(
	fs.createWriteStream('password.txt'))