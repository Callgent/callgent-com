'use client';

import { useState } from 'react';
import { createPaymentSession } from '@/api/priceing';

const Payment = () => {
    const [amount, setAmount] = useState(10);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleAmountChange = (event) => {
        const value = event.target.value;
        if (value < 1) {
            setAmount(1);
        } else if (value > 2000) {
            setAmount(2000);
        } else {
            setAmount(value);
        }
    };

    const handlePayment = async () => {
        if (isProcessing) { return; }
        setIsProcessing(true);
        setError('');
        try {
            const paymentUrl = await createPaymentSession(amount * 100, 'USD');
            if (paymentUrl) {
                window.location.href = paymentUrl.data.url;
            }
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex flex-col items-center p-8">
            <div className="text-center">
                <label htmlFor="amount" className="block mb-2 text-lg font-medium text-gray-700">Enter the amount to recharge (USD):</label>
                <input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    min="1"
                    max="2000"
                    step="0.01"
                    placeholder="Enter amount"
                    className="w-full max-w-xs p-2 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`mt-4 px-6 py-3 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base`}
            >
                {isProcessing ? 'Processing...' : 'Proceed to Payment'}
            </button>
        </div>
    );
};

export default Payment;
