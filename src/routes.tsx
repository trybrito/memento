import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Score from './pages/Score';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
