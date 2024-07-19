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

<body class="bg-gray-900 text-white">
    {/*<!-- Navbar -->*/}
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#" class="text-2xl font-bold">MyQbix</a>
            <button class="md:hidden text-white focus:outline-none" id="navbar-toggler">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div class="hidden md:flex space-x-4" id="navbar-menu">
                <a href="#" class="text-white hover:text-gray-400">Home</a>
                <a href="#" class="text-white hover:text-gray-400">Trending</a>
                <a href="#" class="text-white hover:text-gray-400">Subscriptions</a>
                <a href="#" class="text-white hover:text-gray-400">Library</a>
                <a href="/upload" class="text-white hover:text-gray-400">Upload</a>
            </div>
        </div>
        <div className={`md:hidden 'block' : 'hidden'}`} id="mobile-menu">
            <a href="#" class="block text-white px-2 py-1 hover:bg-gray-700">Home</a>
            <a href="#" class="block text-white px-2 py-1 hover:bg-gray-700">Trending</a>
            <a href="#" class="block text-white px-2 py-1 hover:bg-gray-700">Subscriptions</a>
            <a href="#" class="block text-white px-2 py-1 hover:bg-gray-700">Library</a>
            <a href="#" class="block text-white px-2 py-1 hover:bg-gray-700">Upload</a>
        </div>
    </nav>

    {/*<!-- Hero Section -->*/}
    <section class="bg-cover bg-center h-64"></section><div style={{ backgroundImage: 'url("https://via.placeholder.com/1280x720")' }}></div>
        <div class="container mx-auto h-full flex items-center justify-center">
            <h1 class="text-2xl font-bold bg-gray-800 bg-opacity-75 p-4 rounded">QbixStream</h1>
        </div>
   

    {/*<!-- Main Content -->*/}
    <div class="container mx-auto p-4">
        {/*<!-- Video Grid -->*/}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*<!-- Video Card -->*/}
            <div class="bg-green-700 p-4 rounded-lg shadow-lg">
                <video controls class="w-full h-48 rounded">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <h2 class="mt-2 text-xl font-bold">Video Title</h2>
                <p class="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
            {/*<!-- Repeat for more videos -->*/}
            {/*<!-- Video Card -->*/}
            <div class="bg-green-700 p-2 rounded-lg shadow-lg">
                <video controls class="w-full h-48 rounded">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <h2 class="mt-2 text-xl font-bold">Video Title</h2>
                <p class="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
            {/*<!-- Video Card -->*/}
            <div class="bg-green-700 p-2 rounded-lg shadow-lg">
                <video controls class="w-full h-48 rounded">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                    
                </video>
                <h2 class="mt-2 text-xl font-bold">Video Title</h2>
                <p class="mt-1 text-gray-400">Description of the video content goes here.</p>
            </div>
        </div>
    </div>
</body>
    </nav>
  )
}

export default NavBar