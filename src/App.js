import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Register from './components/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'register':
        return <Register onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <About />
            <Timeline />
            <Prizes />
            <Sponsors />
            <Footer />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      {renderPage()}
    </ThemeProvider>
  );
}

export default App;