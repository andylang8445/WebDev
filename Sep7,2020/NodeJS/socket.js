var io = require('socket.io').listen(3100);

console.log('socket server run!!');

io.sockets.on('connection', function (socket) {
    socket.on('call', function (data) {
        console.log(data);
        socket.overrideMimeType('answer', 'hi~~~!~!');
    })
})
