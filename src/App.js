import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Home from './pages/home';
import Settings from './pages/settings';
import ForYou from './pages/forYou';
import './style.css';
import { signOut } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };


  return (
    <div className="App">
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<ForYou user={user} />} />
            <Route path="/settings" element={<Settings handleLogout={handleLogout} />} />
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




const handleLogout = () => signOut(auth);

{user ? <Sidebar /> : <LoginPage />}

import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "./firebase";

const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return () => unsubscribe();
}, []);