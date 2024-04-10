const express = require('express');
const app = express();
const http = require('http').Server(app);

// define __dirname

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var server = require('http').createServer(app).listen(3000, function () {
    console.log('Server listening at port 3000');
});