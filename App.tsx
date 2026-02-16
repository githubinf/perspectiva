
import React from 'react';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import Manifesto from './components/Manifesto.tsx';
import Features from './components/Features.tsx';
import Library from './components/Library.tsx';
import Authority from './components/Authority.tsx';
import FooterCTA from './components/FooterCTA.tsx';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Manifesto />
      <Features />
      <Library />
      <Authority />
      <FooterCTA />
    </Layout>
  );
};

export default App;
