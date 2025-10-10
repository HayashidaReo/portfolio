import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { CareerDetailPage } from './components/pages/CareerDetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works/:projectId" element={<ProjectDetailPage />} />
        <Route path="/careers/:careerId" element={<CareerDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
