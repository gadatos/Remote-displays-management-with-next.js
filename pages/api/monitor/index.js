import { Server } from 'Socket.IO';

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('display1', (msg) => {
        socket.broadcast.emit('update-monitor1', msg);
      });
      socket.on('display2', (msg) => {
        socket.broadcast.emit('update-monitor2', msg);
      });
      socket.on('display3', (msg) => {
        socket.broadcast.emit('update-monitor3', msg);
      });
      socket.on('display4', (msg) => {
        socket.broadcast.emit('update-monitor4', msg);
      });
      socket.on('display5', (msg) => {
        socket.broadcast.emit('update-monitor5', msg);
      });
    });
  }
  res.end();
};

export default SocketHandler;
