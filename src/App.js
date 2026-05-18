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

const API_URL= "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
//Suggested books

async function fetchData() {
  const response = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested.com{apiKey}`);
  const data = await response.json();
  return data;
}

const API_URL1= "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
//Recommended books

async function fetchData() {
  const response = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended.com{apiKey}`);
  const data = await response.json();
  return data;
}

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


          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
};

export default App;


