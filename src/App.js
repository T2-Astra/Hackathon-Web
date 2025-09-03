import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Footer />
    </ThemeProvider>
  );
}

export default App;