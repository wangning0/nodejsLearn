mongodb数据库
#####注意数据类型
1.连接远程数据库 mongo --host=database_ip
2.创建／切换数据库  use database_name
3.插入数据    db.person.insert({name:'wang',age:10})  db表示当前数据库 person表示集合名
4.查看当前使用的数据库  db  db.getName()
5.删除数据库 db.dropDatabase()
6.推出数据库 exit
7.help查询帮助信息


##操作集合的方法  默认将_id_作为索引
1.查看帮助  db.worker.help()
2.show collections  查看集合
3.db.createCollection(collection_Name) 创建集合
4.db.collection.count()  查询集合中有多少条文档
5.db.collection_Name.drop()  删除某个集合
6.db.collection_Name.find()  查询所有文档
7.db.collection_Name.save()也可以保存文档,但是争对已经有的文档.可以进行更新,若使用insert则会报错
8.db.collection.update(
	   <query>,
	   <update>,
	   {
	     upsert: <boolean>,
	     multi: <boolean>,
	     writeConcern: <document>
	   }
	)	
		query : update的查询条件，类似sql update查询内where后面的。
		update : update的对象和一些更新的操作符（如$set,$inc...）等 $inc在原基础上累加后更新   $set直接更新
		upsert  : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
		multi  : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
		writeConcern  :可选，抛出异常的级别。
		
		db.person.update({},{$inc:{age:2}},{multi:true})  //计数器
		db.person.update({_id:1},{$set:{name:'www',age:11}})
		db.person.update({age:11},{$set:{age:'12'}},{multi:true})
9.db.collection.remove(
		   <query>,
		   {
		     justOne: <boolean>,
		     writeConcern: <document>
		   }
		)
		query :（可选）删除的文档的条件。
		justOne : （可选）如果设为 true 或 1，则只删除一个文档。
		writeConcern  :（可选）抛出异常的级别。
10.db.collection_name.find({queryWhere},{key:1,key:1}) collection_name 集合的名字 	key要显示字段  1表示显示  queryWhere参阅查询条件操作符
	db.person.find({},{age:1})
11.db.collection_name.findOne({})
12.db.collection.find({key:/value/})   collectionName集合名称 key 字段  value值
	db.person.find({name:/zhang/})
13.AND 方法
	db.col.find({key1:val1,key2:val2})
14.OR方法
	db.col.find(
	{
	$or:[
	{key1:va1},{key2:val2}
	]
}
	)
	 db.person.find({$or:[{name:'王宁'},{age:'12'}]})
15.db.person.find({name:'wangning',$or:{[{age:10},{age:20}]}})
16.db.person.find().limit().skip()  	可实现分页的功能，limit限制几条消息，skip表示跳过几条消息
17.db.person.find().sort({age:1})  1表示升序
   db.person.find().sort({age:-1}) -1表示降序