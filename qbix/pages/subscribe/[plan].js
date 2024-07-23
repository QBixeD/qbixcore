// pages/subscribe/[plan].js
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

const SubscribePlan = () => {
  const router = useRouter()
  const { plan } = router.query

  const planDetails = {
    basic: {
      name: 'Basic Plan',
      price: 'R29/month',
      description: 'Access to basic content.',
    },
    standard: {
      name: 'Standard Plan',
      price: 'R59/month',
      description: 'Access to standard content and features.',
    },
    premium: {
      name: 'Premium Plan',
      price: 'R120/month',
      description: 'Access to all content and premium features.',
    }
  }

  const selectedPlan = planDetails[plan] || {}

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Subscribe to {selectedPlan.name}</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-4">Confirm Your Subscription</h1>
          <p className="text-lg mb-4">You have selected the <strong>{selectedPlan.name}</strong>.</p>
          <p className="text-lg mb-4">Price: <strong>{selectedPlan.price}</strong></p>
          <p className="text-md mb-4">{selectedPlan.description}</p>
          <p className="text-md mb-4">Enjoy a 7-day free trial!</p>
          <div className="mt-6">
            <Link href={`/confirm/${plan}`} legacyBehavior>
              <a className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out block w-full text-center">
                Confirm Subscription
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubscribePlan
