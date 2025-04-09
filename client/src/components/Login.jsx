import { useState } from 'react';

export default function Login({ onLogin }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    if (accountNumber === '123456' && pin === '1234') {
      onLogin({ accountNumber });
    } else {
      alert('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-[320px] p-6 bg-gray-800 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-center">ATM Login</h2>

        <div>
          <label className="block text-sm mb-1">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">PIN</label>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
