var EventEmitter = require('events');
var util = require('util');
function Girl (name){
	this.name = name;
}

util.inherits(Girl,EventEmitter);
var girl = new Girl();

girl.addListener('show',function(name){
	console.log(name,'show1');
})
girl.on('show1',function(){
	console.log('show2');
})

girl.emit('show','wangning');