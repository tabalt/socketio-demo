var app = require('./app');
var server = require('http').Server(app);
var io = require('socket.io')(server);

var users = {}

io.on('connection', function (socket) {

    //有人上线
    socket.on('online', function (data) {
        //将上线的用户名存储为 socket 对象的属性，以区分每个 socket 对象，方便后面使用
        socket.name = data.user;
        //users 对象中不存在该用户名则插入该用户名
        if (!users[data.user]) {
            users[data.user] = data.user;
        }
        //向所有用户广播该用户上线信息
        io.sockets.emit('online', {users: users, user: data.user});
    });

});



module.exports = server;