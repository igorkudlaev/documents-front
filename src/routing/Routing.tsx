import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from '../pages/search/Search';
import { UploadPage } from '../pages/upload/UploadPage';
import { MainRouter } from './MainRouter';

export function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainRouter />}>
          <Route path="/" element={<Search />} />
          <Route path="/upload" element={<UploadPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
