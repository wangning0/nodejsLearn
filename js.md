1.concat();表示数组之间的连接
	arr1.concat(arr2);
2.数组的五个用法
	一:indexOf() 返回查找的值在数组中的位置，若没有找到，则返回－1
	var arr = ['wang','1','2'];
	console.log(arr.indexOf('wang'));  0
	console.log(arr.indexOf('4'));	-1

	二:filter() 返回一个根据过滤条件 过滤后的数组
	var arr = [{'name':'nick'},{'name':'wang'},{'name':'ning'},{'name':'wangning'}];
	var newArr = arr.filter(function(item){
		return item.name == "wangning";
	})
	console.log(newArr);
	三:forEach()
	arr.forEach(function(value,index){...})
	四:map()
	五:reduce()
3.delete  删除一个对象的属性
4.parseInt(arg1,arg2) arg2参数为进制，将某进制转换为10进制
5.toString(arg)  若有参数则为进制，将10进制转换为某进制
6.buffer.fill(0)  0填满整个buffer
7.array.unshift()  插入数组的头部
8.array.shift()    删除数组的头部