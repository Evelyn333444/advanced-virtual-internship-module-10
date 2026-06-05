import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Home from './pages/home';
import Settings from './pages/settings';
import ForYou from './pages/forYou';
import UpgradeToPremium from './pages/upgrade_to_premium';
import SubscribeMonth from './pages/subscribeMonth';
import SubscribeYear from './pages/subscribeYear';
import './style.css';
import { SidebarProvider } from './context/sidebarContext';
import Loginhandler from './components/LoginHandler'
import SignUpHandler from './components/signUpHandler'
import Book from './pages/book';
import ReadButtonSummary from './pages/readButtonSummary';
import Library from './pages/library';

const SidebarLayout = () => (
  <SidebarProvider>
    <Outlet />
  </SidebarProvider>
);

const loggedInRoutes = (
  <>
    {/* ... other routes */}
    <Route path="/library" element={<Library user={user} handleLogout={handleLogout} />} />
  </>
);

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

  const loggedInRoutes = (
    <>
      <Route path="/" element={<ForYou user={user} handleLogout={handleLogout} />} />
      <Route path="/settings" element={<Settings handleLogout={handleLogout} />} />
      <Route path="/choose-plan" element={<UpgradeToPremium />} />
      <Route path="/subscribe-month" element={<SubscribeMonth />} />
      <Route path="/subscribe-year" element={<SubscribeYear />} />
      <Route path="/foryou" element={<ForYou user={user} handleLogout={handleLogout} />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="/summary/:id" element={<ReadButtonSummary />} />
    </>
  );

  return (
    <div className="App">
      <Routes>
        {user ? (
          <Route element={<SidebarLayout />}>
            {loggedInRoutes}
          </Route>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
};

export default App;


