var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/wangning');

db.connection.on('error', function(err) {
	console.log(err);
})
db.connection.on('open', function() {
		console.log('连接ok');
	})
	//一个基本的骨架
var PersonSchema = new mongoose.Schema({
	name: {
		type: String
	},
	age: {
		type: Number,
		default: 0
	},
	time: {
		type: Date,
		default: Date.now()
	},
	email: {
		type: String
	}
}, {
	collection: 'person'
});
//会转化成复数
var personModel = db.model('person', PersonSchema);

var personEntity = new personModel({
	name: 'wangning',
	age: 20,
	email: '172234437@qq.com'
});
console.log(personEntity.name);
console.log(personEntity.age);
console.log(personEntity.time);

//Model.update(条件，更新对象，回调函数);
personModel.create([{
	name: 'wangning',
	age: 1
}, {
	name: 'wangning',
	age: 2
}, {
	name: 'wangning',
	age: 3
}, {
	name: 'wangning',
	age: 4
}, {
	name: 'wangning',
	age: 5
}, {
	name: 'wangning',
	age: 6
}, {
	name: 'wangning',
	age: 7
}, ], function(err, doc) {
	console.log('save ok.');
})
personModel.find({},function(err,docs){
	console.log(docs);
})
personModel.find({},null,{skip:3,limit:3,sort:{age:1}},function(err,docs){
	console.log(docs);
})




