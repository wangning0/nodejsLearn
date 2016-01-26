process.argv.forEach(function(value,index,array){
	console.log(value,index,array);
	console.log('*********');
});
process.kill(8243)；
