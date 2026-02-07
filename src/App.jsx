
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BentoGrid from './components/BentoGrid';
import Constellation from './components/Constellation';
import Writings from './components/Writings';
import { portfolioData } from './data/portfolioData';

function HomePage() {
  return (
    <>
      <Constellation />
      <Header />
      <BentoGrid data={portfolioData} />
    </>
  );
}

function WritingsPage() {
  return (
    <>
      <Constellation />
      <Writings />
    </>
  );
}

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/writings" element={<WritingsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
