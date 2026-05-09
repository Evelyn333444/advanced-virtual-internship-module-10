// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyLibrary from './pages/myLibrary';
import logo from "./assets/logo.png"
import Home from './pages/home';
import ForYou from './pages/forYou'
import Settings from './pages/settings'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>This is Home Page <img src={logo} /></>} />
          <Route path="/library" element={<MyLibrary />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
