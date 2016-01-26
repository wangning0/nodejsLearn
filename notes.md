1.nodejs中每一个文件都是一个模块，要获取某一个模块前，要先导出一个模块。
	exports.obj = obj
	module.exports = obj;
2.多个模块可以封装成一个包，npm时node.js默认的包管理工具
3.能在特定IP的特定端口上监听客户端的请求，并根据请求的路径返回响应的结果都叫服务器
4.客户端:只要能向特定(IP)服务器的特定端口发起请求并接受响应的都叫客户端。
5.npm第三方包mime，根据不同的文件后缀从而形成不同的content-type，需要安装


<!-- http -->
1.url模块，对URL进行处理，把字符串转换为对象
{
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=wangning&age=10',
  query: 'name=wangning&age=10',
  pathname: '/user/',
  path: '/user/?name=wangning&age=10',
  href: '/user/?name=wangning&age=10' 
 }
 <!-- global全局对象  相当于浏览器中的window -->
1.this的指向不一样，浏览器的this指向全局对象，因为nodejs中一个文件对应一个独立的模块，所以在处理时会包上一层function从而变成
  function functionName(module,exports,require,__dirname.__filename){
    var name = 'wangning';
    console.log(this.name);    
  }
  从而变成了一个函数的局部变量，this指向的是exports对象
  函数的参数是从外界传入进来，不是全局变量,__dirname表示当前模块所在目录的绝对路径,__filename表示当前模块的绝对路径
2.process.stdin.on(data,function(){})    在控制台标准输入
   process.stdout.write()                在控制台标注输出
3.process.argv  表示在控制台输入时的参数
4.process.kill(pid) 杀死进程
5.process.on('exit',function(){})  进程退出前触发 自杀可以触发，但是被杀死不可以被触发
6.因为可能一个小错误就会导致整个进程崩溃，若不想进程崩溃，可采取以下办法
  process.on('uncaughtException',function(e){console.log(e.message)})  ！！不推荐使用 ！！
7.process.chdir() 改变当前目录 process.cwd() 当前工作目录
8.setTimeout()在所有的同步操作完成之后，再回执行这个操作 下一个任务队列的顶部
9.nexttick() 放到当前队列的底部，所以nexttick()优先级比setTimetout要高
10.nextTick>setTimeout>setImmediate>异步IO 优先级
11.util模版  util.inherits(ctor,supertor)
12.util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
showHidden:是否显示隐藏属性
depth:递归深度
colors:颜色
13.util还可以判断类型，查看他的api就可以
14.eventEmitter = require('events');
15.eventEmitter.on(),eventEmitter.addListener()   监听事件
   evevntEmitter.once() 只监听一次
   eventEmitter.emit()  发射事件
16.一个模块会被一个函数给包起来
17.require.resolve('./person')  返回的是一个绝对路径
18.Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/WangNing/Code/nodejs/nodejsLearnByVideo/module/2.module.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/WangNing/Code/nodejs/nodejsLearnByVideo/module/node_modules',
     '/Users/WangNing/Code/nodejs/nodejsLearnByVideo/node_modules',
     '/Users/WangNing/Code/nodejs/node_modules',
     '/Users/WangNing/Code/node_modules',
     '/Users/WangNing/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }

19.module.id 模块的绝对路径
   module.filename 模块文件的绝对路径
   module.loaded 文件是否加载完全  当return后表示加载完全
   module.parent 父亲模块
   module.children  子模块
20.require.main 表示主模块
   require.resolve  可以查找某一模块的绝对路径
   require.cache   模块缓存
21.包就是对具有相互依赖关系的模块进行统一的管理，一个包必须要有
        package.json 包描述文件
        bin          二进制文件
        lib          存放js文件
        doc          说明文档那个
        test         单元测试和其他测试
22.一个0/1表示一个位，8个位表示一个字节
23.创建buffer的三种方式
    new Buffer(size)
    new Buffer(array)
    new Buffer(str,[encoding])
24.buffer.write(string, [offset], [length], [encoding]) string             
      String                被写入buffer的数据.
      offet                 number,可选,默认0.数据写入到buffer的位置.
      length                Number,可选,默认:buffer.length – offset,要写入数据的长度
      encoding              String,需要使用的编码格式,可选,默认为”utf8″.
25.string_decoder 处理buffer的模版
26.复制buffer
    buffer.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
    targetBuffer        目标buffer，执行复制替换的buffer
    targetStart           目标buffer数据替换的起始位置
    sourceStart          源buffer数据复制的起始位置
    sourceEnd           源buffer数据复制的结束位置
27.buffer中的值最大为255，若为负数，则为该值对255取模再加上255
28.buffer的静态方法
    concat      Buffer.concat([Buffer],Length) length 默认为所有数据都传入
    isBuffer    Buffer.isBuffer(obj)
    isEncoding  Buffer.isEncoding(encoding)
    byteLength  Buffer.byteLength(string, [encoding])  encoding默认为utf-8
29.fd文件描述符中 
      0表示stdin
      1表示stdout
      2表示stderr
30.fs.createReadStream() 创建可读流
    可读流能监听的事件
      readable 会使数据流向操作系统的缓存区，再读到数据后或者排空后会继续再读到数据，触发readable事件
      data     读取数据时触发事件，流动模式
      end      读取数据完毕后触发
      close    文件关闭后触发
      error    产生错误时触发
      read     在触发readable事件时的回调函数里面读取数据的方法
      setEncoding  制定编码
      pause    暂停触发data事件
      resume    恢复data事件
      pipe     设置管道，将可读流的内容输入到可写流中
      unpipe   取消数据通道
      unshift  将数据块插回队列开头 －－－－> 重新再读一遍
31.fs.createWriteStream(path,[options]) 创建可读流可写流的方法
    write(chunk,encoding,callback) 
      chunk指写入的数据
      返回值  写满了系统缓存区为false 未写满则为true
    end
    drain   缓存区全部写入目标文件时触发该函数
    [options]
      highWaterMark 最高水位线  默认为16KB
      encoding      编码格式
      flag          何种操作
      start         开始写入的位置
      autoClose     读完数据后是否关闭文件描述符
32.大文件读取时，若缓存区已经流满了，那么会往临时内存区写，再通过临时内存区写入到文件。
33.流的分类：
    可读流   Readable
    可写流   Writable
    可读可写流 Duplex
    转换流   Transform
    通过流    PassThrough
34.  Readable 抽象类 _read
     Writeable 抽象类 _write
     Duplex    抽象类  _read _write
     Transform 抽象类  _transform
     PassThrough 可实例化
35.流的概念：
    流是一组有序的，有起点有终点的字节数据传输手段
    不关心数据的具体内容，只关心是否从文件中读到了数据以及读到数据后是否对其处理
    流是一个抽象的接口
36.tcp是一个可靠的面向连接的协议 net模块
37.UDP  dgram模块 
    var socket = dgram.createSocket(type,callback)
      type   
                 udp4/udp6
      callback  = function(msg,info)
          msg     收到的数据
          info    
              adress  发送者的地址
              family  发送者地址类型 ipv4/ipv6
              port    发送者的端口号
              size    发送者的发送数据的字节数
  socket.bind(port,[address],[callback])
  socket.send(buf,offset,length,port,address,[callback(err,bytes)])
              
38.请求头内容
  host  请求的服务器主机
  connection  客户端和服务器的连接选项
  user-agent  用户代理
  accept-encoding   告诉服务器 客户端直接的编码
  accept 告诉服务器客户端能接收的类型

39.url.parse(url);
  http://wangning:1234@www.baidu.com:80/test?name=aaa&age=3#top
Url {
  protocol: 'http:',    //协议
  slashes: true,        // 有两个斜杠表示true
  auth: 'wangning:1234',  用户名和密码
  host: 'www.baidu.com:80',  主机名＋端口
  port: '80',               端口
  hostname: 'www.baidu.com',  主机名
  hash: '#top',             查询字符串中＃后的内容
  search: '?name=aaa&age=3',   查询字符串
  query: { name: 'aaa', age: '3' },  去掉？后的查询字符串
  pathname: '/test',          路径
  path: '/test?name=aaa&age=3', 完整路径
  href: 'http://wangning:1234@www.baidu.com:80/?name=aaa&age=3#top' }
40 querystring 
  querystring.parse(str, [sep], [eq], [options])    sep分割符(&) eq(=) options(maxkeys)
  querystring.stringify(obj, [sep], [eq])           
41创建http客户端
  request方法可以向其他网站请求数据
  options
    host 域名或目标主机IP
    hostname 域名或目标主机ip
    port  端口
    method 方法
    path  路径
    headers 哭护短请求头
    auth  认证信息
    callback = function(data){} 获取的数据

    write方法向目标服务器发送数据，可以多次调用
    request.write(chunk,[encoding])
    request.end(chunk,[encoding]) 结束请求

42.express
  中间件  就是处理http请求的函数，用来完成各种特定的任务
    特点： 1.每个中间件都可以控制流程是否进行
          2.每个中间件的req res 是相同对象
          3.如果出错了，转交给错误处理中间件进行处理   错误处理中间件回调函数前有一个err 
          4.如果next里面穿了参数的话，会去执行错误中间件，并且错误中间件放到最下面
  req的参数
    host 主机名
    path 路径名
    query 解析后的对象
    params 路径参数对应的对象
  
  模版引擎
    ejs
      app.set('view engine','ejs');
      app.set('views',__dirname);
      render(filename,{});
    自定义html模版
      app.set('view engine','html');
      app.engine('html',require('ejs').__express);
      app.set('views',__dirname);
  静态文件模块
    
43.cookies
  要用分号＋空格隔开
  可以通过传数组的形式传入

  Set-Cookie: name=value; Path=/; expires=Wednesday, 09-Nov-99 23:12:40 GMT;

  name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字一样
  Expires： 过期时间（秒），在设置的某个时间点后该 Cookie 就会失效，如 expires=Wednesday, 09-Nov-99 23:12:40 GMT
  maxAge： 最大失效时间（毫秒），设置在多少后失效
  secure： 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效
  Path： 表示 cookie 影响到的路，如 path=/。如果路径不能匹配时，浏览器则不发送这个Cookie
  httpOnly： 是微软对COOKIE做的扩展。如果在COOKIE中设置了“httpOnly”属性，则通过程序（JS脚本、applet等）将无法读取到COOKIE信息，防止XSS攻击产生
44.cookie-parser说明
  res.cookie(name,value,[options])
  options 
      domain    域名，默认是当前域名
      path      默认是/
      expires   过期时间，默认为当前会话有效
      secure    只能通过https访问
      httpOnly  防止xss攻击,阻止js读写
      maxAge    有效时间
      signed    是否对cookie加密
45.session 处理中间件  express-session
  app.use(session({
  name: 设置 cookie 中，保存 session 的字段名称，默认为 connect.sid 。
  store: session 的存储方式，默认存放在内存中，也可以使用 redis，mongodb 等。express 生态中都有相应模块的支持。
  secret: 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
  cookie: 设置存放 session id 的 cookie 的相关选项，默认为 (default: { path: '/', httpOnly: true, secure: false, maxAge: null })
  genid: 产生一个新的 session_id 时，所使用的函数， 默认使用 uid2 这个 npm 包。
  rolling: 每个请求都重新设置一个 cookie，默认为 false。
  resave: 即使 session 没有被修改，也保存 session 值，默认为 true。
  saveUninitialized: 保存新创建但未修改的session
  })) 








