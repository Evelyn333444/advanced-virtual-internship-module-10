import { Routes, Route, useNavigate  } from 'react-router-dom';
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
import Book from './pages/book';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
        navigate("/");
    });
};

  return (
    <div className="App">
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<ForYou user={user} handleLogout={handleLogout} />} />
            <Route path="/settings" element={<Settings handleLogout={handleLogout} />} />
            <Route path="/choose-plan" element={<UpgradeToPremium />} />
            <Route path="/foryou" element={<ForYou user={user} handleLogout={handleLogout} />} />
            <Route path="/book/:id" element={<Book />} />


          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
};

export default App;


