import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppBar from '../../components/appbar';
//Socket
let socket;
//Socket End
function AdminPanel() {
  {
    // Inicjacja Socketu
  }

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch('/api/monitor');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    return null;
  };

  // Koniec sekcji Socket
  // Stany Monitorów ustawione na 1
  const [display, setDisplay] = useState({
    display1: 1,
    display2: 1,
    display3: 1,
    display4: 1,
    display5: 1,
  });

  const displayTab = [
    'display1',
    'display2',
    'display3',
    'display4',
    'display5',
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <AppBar></AppBar>
      <div className="max-w-7xl m-auto mt-3 ">
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex flex-col justify-start items-start shadow bg-white w-full">
            <div className="p-6 text-lg font-mono">
              <b>Panel Kontrolny</b>
            </div>
            <div className="flex flex-col justify-start items-start w-full h-full">
              <div className="grid grid-cols-3 gap-10 p-5 w-full justify-between">
                {
                  // początek sekcji odpowiedzialnej za przyciski
                }
                {displayTab.map((e, i) => {
                  return (
                    <Przycisk
                      key={e}
                      nazwa={i + 1}
                      setDisplay={setDisplay}
                      display={display[e]}
                      value={`display${i + 1}`}
                    />
                  );
                })}

                {
                  //Koniec sekcji przyciski
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminPanel;
function Przycisk({ display, setDisplay, value, nazwa }) {
  useEffect(() => {
    socket?.emit(value, display);
  }, [socket, display]);

  return (
    <div className="w-full bg-slate-100 rounded-lg shadow flex flex-col hover:bg-slate-400 ">
      {
        // Napisa Monitor
      }
      <div className="w-full flex flex-row items-center justify-center mt-3 text-2xl font-mono">
        Monitor Numer {nazwa}
      </div>{' '}
      <div className="flex flex-row justify-between">
        {' '}
        <button
          type="button"
          onClick={() => {
            let updatevalue = {};
            updatevalue = { [value]: display - 1 };
            if (display > 1) {
              setDisplay((displays) => ({ ...displays, ...updatevalue }));
            }
          }}
        >
          <label
            for="carousel-1"
            className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </button>
        <button
          type="button"
          onClick={() => {
            let updatevalue = {};
            updatevalue = { [value]: display + 1 };

            setDisplay((displays) => ({ ...displays, ...updatevalue }));
          }}
        >
          <label
            for="carousel-3"
            className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </button>
      </div>
      <div className="w-full flex flex-row items-center justify-center mt-3 text-2xl font-mono">
        Zdjęcie numer {display}
      </div>{' '}
    </div>
  );
}
