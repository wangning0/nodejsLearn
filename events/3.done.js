var fs = require('fs');
var EventEmitter = require('events');
var eve = new EventEmitter();
eve.on('data',out);
var person = {};
fs.readFile('name.txt','utf-8',function(err,data){
	if( err ){
		console.log(err);
	} else{
		person.name = data;
		eve.emit('data');
	}
})
fs.readFile('age.txt','utf-8',function(err,data){
	if( err ){
		console.log(err);
	} else{
		person.age = data;
		eve.emit('data');
	}
})

function out(){
	if( person.age && person.name ){
		console.log(person.name,person.age);
	}
}