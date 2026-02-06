
import React from 'react';
import Header from './components/Header';
import BentoGrid from './components/BentoGrid';
import Constellation from './components/Constellation';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <main>
      <Constellation />
      <Header />
      <BentoGrid data={portfolioData} />
    </main>
  );
}

export default App;
