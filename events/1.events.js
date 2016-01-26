function Person(name){
	this.name = name;
	this._events = {};
}
//实现on emit once
Person.prototype.on = function(eventName, callback) {
	if (this._events[eventName]) {
		this._events[eventName].push(callback);
	} else {
		this._events[eventName] = [callback];
	}
}
Person.prototype.emit = function(eventName) {
	var args = Array.prototype.slice.call(arguments, 1);
	var that = this;
	this._events[eventName].forEach(function(callback,index){
		callback.apply(that,args);
	})
}
Person.prototype.removeListener = function (eventName,callback){
	this._events[eventName] = this._events[eventName].filter(function(item){
		return item != callback;
	})
}
Person.prototype.once = function(eventName,callback){
	function onceCallback (){
		callback.apply(this,arguments);
		this.removeListener(eventName,onceCallback);
	}
	this.on(eventName,onceCallback)
}
var girl = new Person();
girl.on('sb',function(){
	console.log('i am sb');
});
girl.on('sb',function(){
	console.log('yes,you are sb');
});
girl.emit('sb');














