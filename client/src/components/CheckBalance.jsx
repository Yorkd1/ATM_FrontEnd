export default function CheckBalance({ user, onBack }) {
    // Simulate fetching a balance (can be replaced with real data later)
    const balance = 100.00;
  
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg text-center space-y-6">
          <h2 className="text-2xl font-bold">Account Balance</h2>
          <p className="text-lg">Account #: <span className="font-mono">{user.accountNumber}</span></p>
          <p className="text-3xl font-bold text-green-400">${balance.toFixed(2)}</p>
  
          <button
            onClick={onBack}
            className="mt-6 text-sm text-gray-400 hover:text-white transition underline"
          >
             Back to Menu
          </button>
        </div>
      </div>
    );
  }
  