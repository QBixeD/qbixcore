import React, { useState } from 'react';
import Head from 'next/head';

const SubscriptionsPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const plans = [
    { name: 'Basic', price: '$5/month', features: ['Feature 1', 'Feature 2'] },
    { name: 'Standard', price: '$10/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Premium', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  ];

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Subscriptions</title>
        <meta name="description" content="Choose your subscription plan" />
      </Head>
      <div className="text-center">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500"
        >
          Subscribe
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Choose a Subscription Plan</h2>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div key={plan.name} className="border p-4 rounded-lg">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600">{plan.price}</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleSubscribe(plan)}
                      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
