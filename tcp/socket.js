
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(2000,'localhost',function(){
  console.log('已连接到服务端');
  client.write('Hello!');
  setTimeout(function(){
    client.write('bye');
    client.end();
  },10000)
});
client.on('error',function(err){
  console.log(err);
  client.destory();
})
client.on('data',function(data){
  console.log('从服务器端收到数据:'+data);
})