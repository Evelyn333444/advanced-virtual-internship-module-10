import { Routes, Route  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Home from './pages/home';
import Settings from './pages/settings';
import ForYou from './pages/forYou';
import UpgradeToPremium from './pages/upgrade_to_premium';
import './style.css';
import Loginhandler from './components/LoginHandler'
import SignUpHandler from './components/signUpHandler'
import Sidebar from './components/sideBar'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {

  signOut(auth);

};


  return (
    <div className="App">
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<ForYou user={user} />} />
            <Route path="/settings" element={<Settings handleLogout={handleLogout} />} />
            <Route path="/choose-plan" element={<UpgradeToPremium />} />
            <Route path="/foryou" element={<ForYou user={user} />} />


          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
};

export default App;


