import { useState } from 'react';
import Login from './components/Login.jsx';
import Menu from './components/Menu.jsx';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <Menu user={user} onLogout={() => setUser(null)} />
      )}
    </>
  );
}

export default App;
