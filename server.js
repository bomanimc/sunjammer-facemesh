const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '/',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});
app.use(express.static(__dirname + '/dist'));

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

const predictions = [];

app.get('/predictions', function(req, res) {
  res.json({predictions});
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, (err) => {
  if (err) throw err;
  console.log(`> [${env}] Ready on http://localhost:${port}`);
});

// socket.io server
io.on('connection', (socket) => {
  console.log('Someone connected');
  socket.on('prediction', (data) => {
    predictions.push(data);
    socket.broadcast.emit('prediction', data);
  });
});
