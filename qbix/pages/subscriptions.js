// pages/subscriptions.js
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const SubscriptionPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Subscription Plans</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-gray-900 min-h-screen">
        {/* Navbar */}
        <nav className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold">Subscriptions</a>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/" legacyBehavior><a>Home</a></Link>
              <Link href="/trending" legacyBehavior><a>Trending</a></Link>
              <Link href="/subscriptions" legacyBehavior><a className="text-gray-400 hover:text-gray-200">Subscriptions</a></Link>
              <Link href="/Library" legacyBehavior><a>Library</a></Link>
              <Link href="/upload" legacyBehavior><a>Upload</a></Link>
            </div>
          </div>
        </nav>

        {/* Subscription Plans */}
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Choose Your Plan</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
              <p className="text-lg mb-4">Access to basic content.</p>
              <span className="text-xl font-semibold">R29/month</span>
              <div className="mt-4">
                <Link href="/subscribe/basic" legacyBehavior>
                  <a className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Subscribe</a>
                </Link>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Standard Plan</h2>
              <p className="text-lg mb-4">Access to standard content and features.</p>
              <span className="text-xl font-semibold">R59/month</span>
              <div className="mt-4">
                <Link href="/subscribe/standard" legacyBehavior>
                  <a className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Subscribe</a>
                </Link>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
              <p className="text-lg mb-4">Access to all content and premium features.</p>
              <span className="text-xl font-semibold">R120/month</span>
              <div className="mt-4">
                <Link href="/subscribe/premium" legacyBehavior>
                  <a className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Subscribe</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubscriptionPage
