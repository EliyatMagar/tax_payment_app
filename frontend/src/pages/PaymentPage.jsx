// frontend/components/PaymentPage.jsx
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your-stripe-publishable-key'); // Replace with your Stripe publishable key

const PaymentPage = () => {
  const [amount, setAmount] = useState(5000); // Amount in cents (e.g., $50)
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Call the backend to create the payment intent
    axios
      .post('/api/payment/create-payment-intent', { amount })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.error('Error creating payment intent:', error);
      });
  }, [amount]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Page</h2>

      <Elements stripe={stripePromise}>
        <PaymentForm clientSecret={clientSecret} />
      </Elements>
    </div>
  );
};

const PaymentForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    setIsProcessing(false);

    if (error) {
      setError(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      // Handle successful payment (e.g., save transaction details, send confirmation email)
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <CardElement options={{ hidePostalCode: true }} />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md disabled:bg-gray-300"
        disabled={isProcessing || !stripe}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </form>
  );
};

export default PaymentPage;
