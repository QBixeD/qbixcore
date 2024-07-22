import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (

    <nav>
<head>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>DramaBox Clone</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</link>

</head>

<body className="bg-black text-white">
    {/*<!-- Navbar -->*/}
    <nav className="bg-black max-auto px-4"></nav>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold">MyQbix</Link>
            <button className="md:hidden text-white focus:outline-none" id="navbar-toggler">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div className="hidden md:flex space-x-4" id="navbar-menu">
                <Link href="/" className="text-white hover:text-gray-400">Home</Link>
                <Link href="trending" className="text-white hover:text-gray-400">Trending</Link>
                <Link href="/subscription" className="text-white hover:text-gray-400">Subscriptions</Link>
                <Link href="/Library" className="text-white hover:text-gray-400">Library</Link>
                <Link href="/upload" className="text-white hover:text-gray-400">Upload</Link>
            </div>
        </div>
  
    {/*<!-- Hero Section -->*/}
    <Link href="https://ibb.co/rbPtzZy"><img src="https://i.ibb.co/s5SPNF3/MYQBIX-LOGO.png" alt="MYQBIX-LOGO" border="0"></img></Link>
        <div className="container mx-auto h-full flex items-center justify-center">
            <h1 className="text-2xl font-bold transparent bg-opacity-75 p-4 rounded">QbixStream</h1>
        </div>
   

    {/*<!-- Main Content -->*/}
    <div className="container mx-auto p-4">
        {/*<!-- Video Grid -->*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*<!-- Video Card -->*/}
            <div className="transparent p-4 rounded-lg shadow-lg">
                <video controls className="w-full h-48 rounded">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <h2 className="mt-2 text-xl font-bold">Video Title</h2>
                <p className="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
            {/*<!-- Repeat for more videos -->*/}
            {/*<!-- Video Card -->*/}
            <div className="transparent p-2 rounded-lg shadow-lg">
                <video controls className="w-full h-48 rounded">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <h2 className="mt-2 text-xl font-bold">Video Title</h2>
                <p className="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
            {/*<!-- Video Card -->*/}
            <div className="transparent p-2 rounded-lg shadow-lg">
                <video controls className="w-full h-48 rounded">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                    
                </video>
                <h2 className="mt-2 text-xl font-bold">Video Title</h2>
                <p className="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
        </div>
    </div>
    <head></head>
</body>
    </nav>
  )
}

export default NavBar