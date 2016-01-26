//字符串&&buffer流

var Readable = require('stream').Readable;
var util = require('util');

util.inherits(Counter,Readable);

function Counter(max,options){
	Readable.call(this,options);
	this.max = max;
	this._index = 0;
}
Counter.prototype._read = function(){
	if( this._index++ < this.max ){
		this.push(String(this._index));
	} else {
		this.push(null);
	}
} 
var counter = new Counter(10,{encoding:'utf8'});

counter.on('data',function(data){
	console.log(data);
})
counter.on('end',function(){
	console.log('over');
})
