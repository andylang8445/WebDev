var io = require('socket.io').listen(3303);

console.log('socket server run!!');

io.sockes.on('connection', function (socket) {
    socket.on('call', function (data) {
        console.log(data);
        socket.overrideMimeType('answer', 'hi~~~!~!');
    })
})
