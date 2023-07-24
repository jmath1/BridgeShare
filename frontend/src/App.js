import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Blog from './pages/blog';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/blog" element={<Blog/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
