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
    background: '#f8fafc',
    style: {
      backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                       linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
      backgroundSize: "20px 30px",
      WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }
  },
  emerald: {
    name: 'Dual Gradient',
    background: 'white',
    style: {
      backgroundImage: `linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
                       linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
                       radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
                       radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }
  },
  amber: {
    name: 'Amber Glow',
    background: 'white',
    style: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)`,
      backgroundSize: "100% 100%",
    }
  },
  rose: {
    name: 'Rose Glow',
    background: 'white',
    style: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #e11d48 100%)`,
      backgroundSize: "100% 100%",
    }
  },
  purple: {
    name: 'Purple Glow',
    background: 'white',
    style: {
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
    }
  },
  redMatrix: {
    name: 'Matrix',
    background: '#000',
    style: {
      backgroundColor: '#000',
      color: '#fff',
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