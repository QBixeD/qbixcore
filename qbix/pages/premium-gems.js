import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const PremiumUsers = () => {
  // Sample data for premium content with 10-second videos
  const premiumVideos = [
    { id: 1, title: 'Exclusive Clip 1', thumbnail: '/path-to-thumbnail1.jpg', videoSrc: '/path-to-video1.mp4' },
    { id: 2, title: 'Exclusive Clip 2', thumbnail: '/path-to-thumbnail2.jpg', videoSrc: '/path-to-video2.mp4' },
    { id: 3, title: 'Exclusive Clip 3', thumbnail: '/path-to-thumbnail3.jpg', videoSrc: '/path-to-video3.mp4' },
    // Add more premium videos as needed
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Premium Users - MyQbix</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <nav className="bg-black py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold">Premium Content</a>
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
              <Link href="/upload" legacyBehavior>
                <a className="text-white hover:text-gray-400">Upload</a>
              </Link>
              <Link href="/time-watched" legacyBehavior>
                <a className="text-white hover:text-gray-400">Time Watched</a>
              </Link>
              <Link href="/premium-users" legacyBehavior>
                <a className="text-white hover:text-gray-400">Premium Users</a>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {premiumVideos.map((video) => (
              <div key={video.id} className="bg-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover rounded-lg mb-2" />
                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                <video width="100%" controls className="rounded-lg">
                  <source src={video.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumUsers;