import React, { createContext, useContext, useState } from 'react';
import MatrixRain from '../components/MatrixRain';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  grid: {
    name: 'Grid Pattern',
    background: '#f1f5f9',
    style: {
      backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px),
                       linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
      backgroundSize: "20px 30px",
      WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)",
      maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)",
    }
  },
  emerald: {
    name: 'Dual Gradient',
    background: 'white',
    style: {
      backgroundImage: `linear-gradient(to right, rgba(203,213,225,0.9) 1px, transparent 1px),
                       linear-gradient(to bottom, rgba(203,213,225,0.9) 1px, transparent 1px),
                       radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.6), transparent),
                       radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.6), transparent)`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }
  },
  amber: {
    name: 'Amber Glow',
    background: 'white',
    style: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 30%, #f59e0b 100%)`,
      backgroundSize: "100% 100%",
    }
  },
  rose: {
    name: 'Rose Glow',
    background: 'white',
    style: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 30%, #e11d48 100%)`,
      backgroundSize: "100% 100%",
    }
  },
  purple: {
    name: 'Purple Glow',
    background: 'white',
    style: {
      background: "radial-gradient(125% 125% at 50% 90%, #fff 30%, #7c3aed 100%)",
    }
  },
  redMatrix: {
    name: 'Matrix',
    background: '#000800',
    style: {
      backgroundColor: '#000800',
      color: '#00ff55', // Even brighter Matrix green
      position: 'relative',
      zIndex: 0
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('grid');

  const switchTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  // Apply body background color for Matrix theme
  React.useEffect(() => {
    if (currentTheme === 'redMatrix') {
      document.body.style.backgroundColor = '#000800';
      document.body.style.color = '#00ff55'; // Even brighter Matrix green
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }

    // Cleanup function to reset when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, themes }}>
      {/* Render MatrixRain component when redMatrix theme is active */}
      {currentTheme === 'redMatrix' && <MatrixRain />}
      <div style={themes[currentTheme].style}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};