// pages/confirm/[plan].js
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import React, { useState } from 'react'

const ConfirmSubscription = () => {
  const router = useRouter()
  const { plan } = router.query

  const planDetails = {
    basic: {
      name: 'Basic Plan',
      price: 'R29/month',
      trial: '7-day free trial',
      billingCycle: 'Monthly',
      billingDescription: 'You will be charged $5 at the start of each month.',
    },
    standard: {
      name: 'Standard Plan',
      price: 'R59/month',
      trial: '7-day free trial',
      billingCycle: 'Monthly',
      billingDescription: 'You will be charged $10 at the start of each month.',
    },
    premium: {
      name: 'Premium Plan',
      price: 'R120/month',
      trial: '7-day free trial',
      billingCycle: 'Monthly',
      billingDescription: 'You will be charged $20 at the start of each month.',
    }
  }

  const selectedPlan = planDetails[plan] || {}
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle email confirmation logic here
    setIsSubmitted(true)
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Subscription Confirmed</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-black text-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-4">Subscription Confirmed</h1>
          <p className="text-lg mb-4">Thank you for subscribing to the <strong>{selectedPlan.name}</strong>.</p>
          <p className="text-md mb-4">Price: <strong>{selectedPlan.price}</strong></p>
          <p className="text-md mb-4">Your subscription includes a <strong>{selectedPlan.trial}</strong>.</p>
          <p className="text-md mb-4">{selectedPlan.billingDescription}</p>
          <p className="text-md mb-4">Billing Cycle: <strong>{selectedPlan.billingCycle}</strong></p>

          {isSubmitted ? (
            <p className="text-md mb-4">A confirmation email has been sent to <strong>{email}</strong>. Please check your inbox to verify your subscription.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mb-6">
              <label htmlFor="email" className="block text-left mb-2 font-semibold">Enter your email address to confirm:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
                placeholder="example@example.com"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out w-full"
              >
                Confirm Email
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-col gap-4">
            <Link href="/" legacyBehavior>
              <a className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out block w-full text-center">
                Go to Home
              </a>
            </Link>
            <Link href="/subscriptions" legacyBehavior>
              <a className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out block w-full text-center">
                View Subscription Plans
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmSubscription
