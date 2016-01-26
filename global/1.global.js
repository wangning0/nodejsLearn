//console.log(global);
/*
	setImmediate
	clearImmediate
	pid -> process id 进程ID
	process 当前的进程对象
*/

//当有数据流入的时候，就会触发回调函数,标准输入表示在控制台上输入
//console.log()调用的是标准输出
process.on('uncaughtException',function(e){
	console.log(e.message);
})
process.stdout.write('hello \n');
process.stdin.on('data',function(data){
	console.log(data.toString());
})
process.on('exit',function(){
	console.log('over');		
})
console.log(a);
