import { useState } from 'react';

export default function Withdraw({ onBack }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleWithdraw = () => {
    const parsedAmount = parseFloat(amount);

    if (!parsedAmount || parsedAmount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    // Simulate success (replace with real backend logic later)
    setMessage(`Success! You withdrew $${parsedAmount.toFixed(2)}`);
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center">Withdraw Funds</h2>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleWithdraw}
          className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg font-semibold transition"
        >
          Withdraw
        </button>

        {message && <p className="text-center text-sm text-green-400">{message}</p>}

        <button
          onClick={onBack}
          className="text-sm text-gray-400 hover:text-white transition underline block text-center mt-4"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
