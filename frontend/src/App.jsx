import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [amount, setAmount] = useState('');

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePay = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const response = await fetch('https://payment-integration-8syu.onrender.com/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(amount) }),
    });

    const data = await response.json();

    const options = {
      key: 'rzp_test_dPDFsB9ISejZfr',
      amount: data.amount,
      currency: data.currency,
      name: 'ModernPay',
      description: 'Pay securely with Razorpay. Fast, safe, and easy payments for everyone!',
      order_id: data.id,
      handler: function (response) {
        alert('Payment Success');
        console.log(response);
      },
      prefill: {
        name: 'Md Tousif Alam',
        email: 'mdtousifalam85@gmail.com',
        contact: '7857024383',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">Razorpay Test Payment</h2>
        <p className="payment-desc">
          Experience seamless, secure, and lightning-fast payments with our modern gateway.<br />
          Enter the amount you wish to pay and click <b>Pay Now</b> to proceed.<br />
          <span className="desc-note">Test mode: Use Razorpay test card details for demo payments.</span>
        </p>
        <div className="payment-input-wrapper">
          <span className="input-icon">₹</span>
          <input
            type="number"
            placeholder="Enter Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="payment-input"
            min="1"
            step="0.01"
            aria-label="Amount in INR"
          />
        </div>
        <button onClick={handlePay} className="payment-button" disabled={!amount}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default App;
