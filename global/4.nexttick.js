console.log('a客人');
setTimeout(function(){
	console.log('a扫地');
}, 0);
process.nextTick(function(){
	console.log('a扫地11');
}) 
//优先级比setTimeout高
console.log('b客人');
console.log('c客人');