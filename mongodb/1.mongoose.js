var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/wangning');

db.connection.on('error',function(err){
	console.log(err);
})
db.connection.on('open',function(){
	console.log('连接ok');
})
//一个基本的骨架
var PersonSchema = new mongoose.Schema({
	name : {type:String},
	age : {type:Number,default:0},
	time:{type:Date,default:Date.now()},
	email:{type:String}
},{
	collection:'person'
});
//会转化成复数
var personModel = db.model('person',PersonSchema);

var personEntity = new personModel({
	name:'wangning',
	age:20,
	email:'172234437@qq.com'
});
console.log(personEntity.name);
console.log(personEntity.age);
console.log(personEntity.time);

personEntity.save(function(err,doc){
	if(err){
		console.log(err);
	} else{
		console.log(doc);
	}
})
personModel.create({
	name:'wn',
	age:10,
	email:'aaa@qq.com'
},function(err,doc){
	if(err){
		console.log(err);
	} else{
		console.log('create'+doc);
	}
})
//Model.update(条件，更新对象，回调函数);

personModel.update({name:'wn'},{$set:{age:20}},function(){
	console.log('更新成功');
})
personModel.find({},function(err,docs){
	if(err){
		console.log(err);
	} else {
		console.log('find'+docs);
	}
})
personModel.remove({},function(){
	console.log('删除成功');
})