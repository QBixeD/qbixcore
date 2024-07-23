import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Qbix</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-white">
        {/* Navbar */}
        <nav className="bg-black max-auto px-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="#">
              <span className="text-2xl font-bold">MyQbix</span>
            </Link>
            <button className="md:hidden text-white focus:outline-none" id="navbar-toggler">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className="hidden md:flex space-x-4" id="navbar-menu">
              <Link href="/" className="text-white hover:text-gray-400">Home</Link>
              <Link href="/trending" className="text-white hover:text-gray-400">Trending</Link>
              <Link href="/subscriptions" className="text-white hover:text-gray-400">Subscriptions</Link>
              <Link href="/Library" className="text-white hover:text-gray-400">Library</Link>
              <Link href="/upload" className="text-white hover:text-gray-400">Upload</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto h-full flex items-center justify-center">
          <Link href="https://ibb.co/rbPtzZy">
            <img src="https://i.ibb.co/s5SPNF3/MYQBIX-LOGO.png" alt="MYQBIX-LOGO" border="0" />
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto p-4">
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Video Card */}
            <div className="transparent p-4 rounded-lg shadow-lg">
              <video controls className="w-full h-48 rounded">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="mt-2 text-xl font-bold">Video Title</h2>
              <p className="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
            {/* Repeat for more videos */}
            <div className="transparent p-2 rounded-lg shadow-lg">
              <video controls className="w-full h-48 rounded">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="mt-2 text-xl font-bold">Video Title</h2>
              <p className="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
            <div className="transparent p-2 rounded-lg shadow-lg">
              <video controls className="w-full h-48 rounded">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="mt-2 text-xl font-bold">Video Title</h2>
              <p className="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
