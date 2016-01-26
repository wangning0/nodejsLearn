var Human = require('./Human');
var boy = new Human('wangning',20);
var girl = new Human('chunzhi',30);
console.log(boy.name,boy.age);
console.log(girl.name,girl.age);
boy.setAge('10');
console.log(boy.name,boy.age);
console.log(girl.name,girl.age);
console.log(boy.home,girl.home);
boy.home = "上海";	//这个home是boy的私有变量,先找到实例上的变量，未找到则找原型上的
console.log(boy.home,girl.home);