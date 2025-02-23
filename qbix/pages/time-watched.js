import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const TimeWatched = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [data, setData] = useState([]);
  const [autoplay, setAutoplay] = useState(true);
  const [reminder, setReminder] = useState(null);
  const [moviesWatched, setMoviesWatched] = useState([]);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          setData((prevData) => [...prevData, newTime]);
          return newTime;
        });
      }, 1000);
      setIntervalId(id);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (time >= 3600 && reminder === null) { // Reminder after 1 hour
      setReminder('Time for a break!');
      alert('Time for a break!');
    }
    if (time >= 86400 && reminder === null) { // Reminder after 24 hours
      setReminder('It\'s bedtime!');
      alert('It\'s bedtime!');
    }
  }, [time, reminder]);

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
    setData([]);
    setReminder(null);
  };

  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Time Watched (seconds)',
        data: data,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 1,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Intervals',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Seconds',
        },
      },
    },
  };

  useEffect(() => {
    // Mock fetching recently watched movies in the last 12 hours
    const fetchMoviesWatched = () => {
      const now = Date.now();
      const movies = [
        { title: 'Movie 1', watchedAt: now - 2 * 3600000 }, // 2 hours ago
        { title: 'Movie 2', watchedAt: now - 4 * 3600000 }, // 4 hours ago
        { title: 'Movie 3', watchedAt: now - 10 * 3600000 }, // 10 hours ago
        { title: 'Movie 4', watchedAt: now - 14 * 3600000 }, // 14 hours ago, should not appear
      ];
      setMoviesWatched(movies.filter(movie => (now - movie.watchedAt) <= 12 * 3600000));
    };

    fetchMoviesWatched();
  }, []);

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
              <a className="text-2xl font-bold">Time Watched</a>
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
              <Link href="/premium-gems" legacyBehavior>
                <a className="text-white hover:text-gray-400">Premium Gems</a>
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
            <div className="w-full md:w-2/3 lg:w-1/2 h-64">
              <Line data={chartData} options={chartOptions} />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <label className="flex items-center space-x-2">
                <span className="text-xl font-semibold">Autoplay</span>
                <input
                  type="checkbox"
                  checked={autoplay}
                  onChange={() => setAutoplay(!autoplay)}
                  className="form-checkbox h-6 w-6 text-blue-600"
                />
              </label>
              <p className="text-lg">
                Autoplay is {autoplay ? 'Enabled' : 'Disabled'}.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Movies Watched in the Last 12 Hours</h2>
            <ul className="list-disc list-inside">
              {moviesWatched.map((movie, index) => (
                <li key={index} className="text-lg">{movie.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeWatched;
