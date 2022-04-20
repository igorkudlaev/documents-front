import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from '../pages/search/Search';
import { Upload } from '../pages/upload/Upload';

export function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}
