var socket = io();

socket.on('connect', function () {
    console.log('Connected to socket.io server!');
});

socket.on('message', function(message){
    console.log('new message:');
    console.log(message.text);
});