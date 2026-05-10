import { Routes, Route } from 'react-router-dom';

<div className="App">
  <Routes>
    <Route path="/library" element={<MyLibrary />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/" element={<Home />} />
    <Route path="/forYou" element={<ForYou />} />
  </Routes>
</div>