var app = require('express')();//express将app初始化成一个函数处理器
var http = require('http').Server(app);//将app提供给HTTP服务器
var io = require('socket.io')(http);//传递http（HTTP Server）对象创建一个新的socket.io实例

app.get('/',function(req,res){//路由处理器，访问主页时，处理器被调用
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){//套接字监听connection事件
	socket.on('chat message',function(msg){
		io.emit('chat message',msg);
	});
});

http.listen(3000,function(){//http服务器监听300端口
	console.log('listening on *:3000');
});

