const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

// socket.io server
io.on('connection', (socket) => {
  socket.emit('message', 'YO');

  socket.on('detection', (data) => {
    socket.broadcast.emit('detection', data);
  });
});

app.get('*', (req, res) => {
  return nextHandler(req, res);
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> [${env}] Ready on http://localhost:${port}`);
});