import { useState } from 'react';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import CheckBalance from './CheckBalance';

export default function Menu({ user, onLogout }) {
  const [view, setView] = useState('menu');

  if (view === 'withdraw') {
    return <Withdraw onBack={() => setView('menu')} />;
  }
  if (view === 'deposit') {
    return <Deposit onBack={() => setView('menu')} />;
  }
  if (view === 'balance') {
    return <CheckBalance user={user} onBack={() => setView('menu')} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg space-y-6 text-center">
        <h2 className="text-2xl font-bold">Welcome, {user.accountNumber}</h2>
        <p className="text-sm text-gray-400">Please select a transaction:</p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-500 py-3 px-4 rounded-lg font-semibold transition"
            onClick={() => setView('withdraw')}
          >
            Withdraw
          </button>
          <button
            className="bg-green-600 hover:bg-green-500 py-3 px-4 rounded-lg font-semibold transition"
            onClick={() => setView('deposit')}
          >
            Deposit
          </button>
          <button
            className="bg-yellow-600 hover:bg-yellow-500 py-3 px-4 rounded-lg font-semibold transition col-span-2"
            onClick={() => setView('balance')}
          >
            Check Balance
          </button>
        </div>

        <button
          onClick={onLogout}
          className="mt-6 text-sm text-red-400 hover:text-red-300 transition underline"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
