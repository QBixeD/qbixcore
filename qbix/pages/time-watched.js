import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const TimeWatched = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Time Watched - My Qbix</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <nav className="bg-black max-auto px-4 py-2">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold">MyQbix</a>
            </Link>
            <div className="hidden md:flex space-x-4" id="navbar-menu">
              <Link href="/" legacyBehavior>
                <a className="text-white hover:text-gray-400">Home</a>
              </Link>
              <Link href="/trending" legacyBehavior>
                <a className="text-white hover:text-gray-400">Trending</a>
              </Link>
              <Link href="/subscriptions" legacyBehavior>
                <a className="text-white hover:text-gray-400">Subscriptions</a>
              </Link>
              <Link href="/Library" legacyBehavior>
                <a className="text-white hover:text-gray-400">Library</a>
              </Link>
              <Link href="/upload" legacyBehavior>
                <a className="text-white hover:text-gray-400">Upload</a>
              </Link>
              <Link href="/time-watched" legacyBehavior>
                <a className="text-white hover:text-gray-400">Time Watched</a>
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Time Watched</h1>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <p className="text-xl font-semibold">Total Time Watched</p>
              <p className="text-3xl font-bold">{formatTime(time)}</p>
            </div>
            <div className="flex space-x-4">
              <button onClick={handleStart} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                Start
              </button>
              <button onClick={handleStop} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out">
                Stop
              </button>
              <button onClick={handleReset} className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeWatched;
