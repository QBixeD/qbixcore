import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Trending = () => {
  // Dummy video data; replace with actual video data source
  const videos = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trending - My Qbix</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <nav className="bg-black max-auto px-4 py-2">
          <div className="container mx-auto flex justify-between items-center">
            <Link legacyBehavior href="/">
              <a className="text-2xl font-bold">Trending</a>
            </Link>
            <button className="md:hidden text-white focus:outline-none" id="navbar-toggler">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className="hidden md:flex space-x-4" id="navbar-menu">
              <Link legacyBehavior href="/">
                <a className="text-white hover:text-gray-400">Home</a>
              </Link>
              <Link legacyBehavior href="/trending">
                <a className="text-white hover:text-gray-400">Trending</a>
              </Link>
              <Link legacyBehavior href="/subscriptions">
                <a className="text-white hover:text-gray-400">Subscriptions</a>
              </Link>
              <Link legacyBehavior href="/Library">
                <a className="text-white hover:text-gray-400">Library</a>
              </Link>
              <Link legacyBehavior href="/upload">
                <a className="text-white hover:text-gray-400">Upload</a>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <Link legacyBehavior href="/trending">
                <a className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                  Trending
                </a>
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((videoUrl, index) => (
              <div key={index} className="transparent p-4 rounded-lg shadow-lg">
                <video controls className="w-full h-48 rounded">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h2 className="mt-2 text-xl font-bold">Video Title {index + 1}</h2>
                <p className="mt-1 text-gray-400">Description of the video content goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
