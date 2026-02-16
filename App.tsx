
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Features from './components/Features';
import Library from './components/Library';
import Authority from './components/Authority';
import FooterCTA from './components/FooterCTA';

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
