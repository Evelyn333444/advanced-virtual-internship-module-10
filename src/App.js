import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MyLibrary from './pages/myLibrary';
import Settings from './pages/settings';
import ForYou from './pages/forYou';
import Style from './style.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<MyLibrary />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/forYou" element={<ForYou />} />
        <Route path="/style.css" element={<Style />} />
      </Routes>
    </div>
  );
};

export default App;