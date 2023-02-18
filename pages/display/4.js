import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

let socket;
function One() {
  const [input, setInput] = useState();

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/monitor');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('update-monitor4', (msg) => {
      setInput(msg);
    });
    return null;
  };

  return (
    <div class="bg-purple-600 min-h-screen">
      <div className="w-full h-full ">
        <div className="p-10 bg-white rounded-b-lg w-72 ml-10 font-mono text-xl">
          Monitor numer 4
        </div>
        <img
          className=" h-screen 
        fixed 
        top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
        bg-yellow-500 drop-shadow-xl rounded-b-lg p-1"
          src={`/${input}.png`}
        ></img>
      </div>
    </div>
  );
}

export default One;
