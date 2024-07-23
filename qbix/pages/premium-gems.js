// pages/library.js
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Library = () => {
  // Sample data for library items
  const videos = [
    { id: 1, title: 'Video 1', thumbnail: '/path-to-thumbnail1.jpg' },
    { id: 2, title: 'Video 2', thumbnail: '/path-to-thumbnail2.jpg' },
    { id: 3, title: 'Video 3', thumbnail: '/path-to-thumbnail3.jpg' },
    // Add more videos as needed
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Library - MyQbix</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold">MyQbix</a>
            </Link>
            <div className="hidden md:flex space-x-4">
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
          <h1 className="text-3xl font-bold mb-4">Library</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-700 p-4 rounded-lg">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded-lg mb-2" />
                <h2 className="text-xl font-semibold">{video.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
