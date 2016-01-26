var util = require('util');
function Parent(){
	this.name = 'parent';
	this.age = 19;
	this.satHello = function(){
		console.log('hello',this.name);
	}
}
Parent.prototype.showName = function(){
	console.log(this.name);
}
function Child(){
	this.name = 'child';
}

/*Child.prototype = new Parent();
Child.prototype.constructor = Child;
*/
util.inherits(Child, Parent);		//继承
var child = new Child();

child.showName();

function Person(){
	this.name = 'person';
	this.fn = function(){
		console.log('person');
	}
}
var pe = new Person();
console.log(util.inspect(pe,true,null,true));
console.log('********');

var arr1 = [1,2];
var arr2 = [3,4,2];
console.log(arr1.concat(arr2));
console.log(Array.prototype.push.apply(arr1,arr2));

console.log(arr1);






