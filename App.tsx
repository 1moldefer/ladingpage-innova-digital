import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import VapApp from './components/VapApp';
import Responsibility from './components/Responsibility';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-display">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <VapApp />
        <Responsibility />
        <Contact />
      </main>
      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;
