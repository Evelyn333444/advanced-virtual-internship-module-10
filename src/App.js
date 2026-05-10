import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MyLibrary from './pages/myLibrary';
import Settings from './pages/settings';
import ForYou from './pages/forYou';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<MyLibrary />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/forYou" element={<ForYou />} />
        <Route path="/app.css" element={<App />} />
      </Routes>
    </div>
  );
};

export default App;