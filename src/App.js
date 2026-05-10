// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyLibrary from './pages/myLibrary';
import Home from './pages/home';
import ForYou from './pages/forYou'
import Settings from './pages/settings'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/library" element={<MyLibrary />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/forYou" element={<ForYou />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
