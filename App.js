import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import ForYou from "./pages/ForYou";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <Link to="for-you">For You</Link>
      </nav>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/settings" exact element={<Settings />} />
        <Route path="/for-you" exact element={<ForYou />} />
      </Routes>
    </>
  );
}

export default App;