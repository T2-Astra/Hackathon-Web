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
    name: 'Grid',
    background: '#f8fafc',
    style: {
      backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                       linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
      backgroundSize: "20px 30px",
      WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 0%, #000 70%, transparent 100%)",
      maskImage: "radial-gradient(ellipse 70% 80% at 50% 0%, #000 70%, transparent 100%)",
    }
  },
  emerald: {
    name: 'G-Dark',
    background: '#000000',
    style: {
      background: "#000000",
      backgroundImage: `linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
                       linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }
  },
  amber: {
    name: 'Amber',
    background: 'white',
    style: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 30%, #f59e0b 100%)`,
      backgroundSize: "100% 100%",
    }
  },
  rose: {
    name: 'Rose',
    background: 'white',
    style: {
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 30%, #e11d48 100%)`,
      backgroundSize: "100% 100%",
    }
  },
  purple: {
    name: 'Purple',
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

  // Apply body background color for Matrix and Dark Grid themes
  React.useEffect(() => {
    if (currentTheme === 'redMatrix') {
      document.body.style.backgroundColor = '#000800';
      document.body.style.color = '#00ff55';
    } else if (currentTheme === 'emerald') {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
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

  // Only apply theme styles to whole website for Matrix and Dark Grid themes
  const shouldApplyGlobalTheme = currentTheme === 'redMatrix' || currentTheme === 'emerald';

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, themes }}>
      {/* Render MatrixRain component when redMatrix theme is active */}
      {currentTheme === 'redMatrix' && <MatrixRain />}
      <div style={shouldApplyGlobalTheme ? themes[currentTheme].style : {}}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};