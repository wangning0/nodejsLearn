function Queue(){
	this.data = [];
	this.size = 0;
}

Queue.prototype.enqueue = function(data){
	this.data.push(data);
	this.size += 1;
}
Queue.prototype.dequeue = function(){
	this.data.shift();
	this.size -= 1;
}

var que = new Queue();

que.enqueue(1);
que.enqueue(12);
que.enqueue(13);
que.dequeue();
console.log(que);
