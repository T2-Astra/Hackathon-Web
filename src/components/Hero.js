import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = ({ onNavigate }) => {
  const { currentTheme, themes, switchTheme } = useTheme();
  const theme = themes[currentTheme];
  const isMatrix = currentTheme === 'redMatrix';
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showGhostInGif, setShowGhostInGif] = useState(false);
  const [showGhostMessage, setShowGhostMessage] = useState(false);
  const [showWavingGhost, setShowWavingGhost] = useState(false);
  const mobileMenuRef = React.useRef(null);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Click outside to close mobile menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Show ghost in GIF after 4 seconds, then show message 2 seconds later
  React.useEffect(() => {
    const gifTimer = setTimeout(() => {
      setShowGhostInGif(true);
    }, 4000);

    const messageTimer = setTimeout(() => {
      setShowGhostMessage(true);
    }, 6000); // Show message 2 seconds after ghost reaches GIF

    // Show waving ghost from left corner after GIF ghost shows message (after 7 seconds) - Desktop only
    const wavingTimer = setTimeout(() => {
      setShowWavingGhost(true);
      // Ghost stays permanently, no timeout to hide it
    }, 7000); // 1 second after the GIF ghost message appears

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(gifTimer);
      clearTimeout(wavingTimer);
    };
  }, []);

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: theme.background }}>
      {/* Dynamic Theme Background */}
      <div
        className="absolute inset-0 z-0"
        style={theme.style}
      />
      {/* Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-4">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* HackFest 2025 - Top Left */}
            <div>
              <h1 className={`text-xl font-bold font-space ${isMatrix ? 'text-green-400' : 'gradient-text'}`}>HackFest 2025</h1>
            </div>

            {/* Desktop Navigation - Top Right */}
            <div className="hidden md:flex items-center gap-4 sm:gap-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-blue-50">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-blue-50">About</a>
              <a href="#timeline" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-blue-50">Timeline</a>
              <a href="#prizes" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-blue-50">Prizes</a>
              <a href="#sponsors" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-blue-50">Sponsors</a>

              {/* Theme Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 14.25c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3zM12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 1.66.45 3.22 1.24 4.56a1.5 1.5 0 002.12.44l.44-.44c.39-.39.39-1.02 0-1.41a6 6 0 1110.2 0c-.39.39-.39 1.02 0 1.41l.44.44a1.5 1.5 0 002.12-.44C20.55 15.22 21 13.66 21 12z" />
                  </svg>
                  Themes
                </button>

                {/* Theme Dropdown */}
                {isThemeMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {Object.entries(themes).map(([key, themeOption]) => (
                      <button
                        key={key}
                        onClick={() => {
                          switchTheme(key);
                          setIsThemeMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${currentTheme === key ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                      >
                        {themeOption.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileMenuOpen && (
                <div ref={mobileMenuRef} className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
                  <div className="menu">
                    <ul>
                      <li>
                        <a 
                          href="#home" 
                          onClick={closeMenu}
                          className="flex items-center px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="text-sm font-medium">Home</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#about" 
                          onClick={closeMenu}
                          className="flex items-center px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-medium">About</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#timeline" 
                          onClick={closeMenu}
                          className="flex items-center px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-medium">Timeline</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#prizes" 
                          onClick={closeMenu}
                          className="flex items-center px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-sm font-medium">Prizes</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#sponsors" 
                          onClick={closeMenu}
                          className="flex items-center px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="text-sm font-medium">Sponsors</span>
                        </a>
                      </li>
                      
                      {/* Themes Section */}
                      <li className="border-t border-gray-200 mt-1 pt-1">
                        <div className="px-4 py-2">
                          <p className="text-xs font-semibold text-gray-500 mb-2">Themes</p>
                          <div className="space-y-1">
                            {Object.entries(themes).map(([key, themeOption]) => (
                              <button
                                key={key}
                                onClick={() => {
                                  switchTheme(key);
                                  closeMenu();
                                }}
                                className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${
                                  currentTheme === key
                                    ? 'bg-blue-100 text-blue-600 font-medium'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {themeOption.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </li>
                      
                      {/* Credits Section */}
                      <li className="border-t border-gray-200 mt-1 pt-1">
                        <div className="px-4 py-2 text-center">
                          <p className="text-xs text-gray-400 mb-1">Made by</p>
                          <p className="text-xs font-semibold text-blue-600">krishmhatre</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



      {/* Circular Ghost Animation */}
      <div className="absolute top-1/2 left-1/2 z-30 pointer-events-none">
        <div className="animate-ghost-random-journey">
          {/* Ghost Character */}
          <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full relative animate-scary-float">
            {/* Glowing Red Eyes */}
            <div className="absolute top-4 left-3 w-2 h-2 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50"></div>
            <div className="absolute top-4 right-3 w-2 h-2 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50" style={{ animationDelay: '0.5s' }}></div>

            {/* Dark Eye Sockets */}
            <div className="absolute top-3 left-2 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute top-3 right-2 w-4 h-4 bg-black rounded-full"></div>

            {/* Scary Mouth */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black rounded-full">
              {/* Teeth */}
              <div className="absolute top-0 left-1 w-0.5 h-1 bg-white transform rotate-12"></div>
              <div className="absolute top-0 left-2 w-0.5 h-2 bg-white"></div>
              <div className="absolute top-0 right-2 w-0.5 h-2 bg-white"></div>
              <div className="absolute top-0 right-1 w-0.5 h-1 bg-white transform -rotate-12"></div>
            </div>

            {/* Horns */}
            <div className="absolute -top-1 left-4 w-0 h-0 border-l border-r border-b-2 border-transparent border-b-red-800 transform -rotate-12"></div>
            <div className="absolute -top-1 right-4 w-0 h-0 border-l border-r border-b-2 border-transparent border-b-red-800 transform rotate-12"></div>

            {/* Wispy Bottom */}
            <div className="absolute -bottom-1 left-1 w-3 h-4 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp"></div>
            <div className="absolute -bottom-2 left-4 w-2 h-5 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute -bottom-1 right-1 w-3 h-4 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute -bottom-3 right-4 w-2 h-4 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.9s' }}></div>

            {/* Floating Arms */}
            <div className="absolute top-8 -left-4 w-6 h-2 bg-gray-400 rounded-full animate-scary-arms"></div>
            <div className="absolute top-8 -right-4 w-6 h-2 bg-gray-400 rounded-full animate-scary-arms" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Waving Ghost from Left Corner - Desktop Only */}
      {showWavingGhost && (
        <div className="hidden lg:block absolute top-1/2 left-0 z-40 pointer-events-none">
          <div className="animate-wave-hello">
            {/* Same Ghost as in GIF but waving */}
            <div className="w-20 h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full mx-auto relative animate-scary-float">
              {/* Glowing Red Eyes */}
              <div className="absolute top-6 left-5 w-3 h-3 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50"></div>
              <div className="absolute top-6 right-5 w-3 h-3 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50" style={{ animationDelay: '0.5s' }}></div>

              {/* Dark Eye Sockets */}
              <div className="absolute top-5 left-4 w-5 h-5 bg-black rounded-full"></div>
              <div className="absolute top-5 right-4 w-5 h-5 bg-black rounded-full"></div>

              {/* Happy Mouth - No teeth for friendly wave */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black rounded-full"></div>

              {/* Horns */}
              <div className="absolute -top-2 left-6 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-800 transform -rotate-12"></div>
              <div className="absolute -top-2 right-6 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-800 transform rotate-12"></div>

              {/* Wispy Bottom */}
              <div className="absolute -bottom-2 left-2 w-4 h-6 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp"></div>
              <div className="absolute -bottom-3 left-6 w-3 h-8 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute -bottom-2 right-2 w-4 h-6 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute -bottom-4 right-6 w-3 h-7 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.9s' }}></div>

              {/* Waving Hand */}
              <div className="absolute top-10 -right-8 w-8 h-3 bg-gray-400 rounded-full animate-wave-hand"></div>
              {/* Normal Hand */}
              <div className="absolute top-10 -left-6 w-8 h-3 bg-gray-400 rounded-full animate-scary-arms"></div>

              {/* Hi! Message */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="bg-white px-3 py-1 rounded-lg shadow-lg border-2 border-gray-300">
                  <p className="text-sm font-bold text-gray-800">Hi!👋</p>
                  {/* Speech bubble arrow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Your Content/Components */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 sm:space-y-8">

          {/* Announcement Badge */}
          <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center px-4">
            <div className="inline-flex items-center justify-center font-medium w-fit whitespace-nowrap shrink-0 gap-1 sm:gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border bg-white/80 border-gray-200/50 text-gray-900 hover:bg-white/90">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="font-medium">Registration Open</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-orange-500">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              <span className="hidden xs:inline-flex items-center text-xs">March 15-17</span>
            </div>
          </div>

          {/* Description and Animation Side by Side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-6 sm:mb-8">
            {/* Left Side - Heading and Description */}
            <div className="flex-1 max-w-lg">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
                  <span className={`font-medium transition-colors duration-300 ${isMatrix ? 'text-cyan-400 animate-pulse' : 'text-gray-900'}`}>Build the </span>
                  <span className={isMatrix ? 'text-yellow-400 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]' : 'bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 from-neutral-900 via-slate-500 to-neutral-500'}>Future</span>
                </h1>
              </div>

              {/* Description Text */}
              <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${isMatrix ? 'text-green-300' : 'text-gray-600'} text-center lg:text-left`}>
                Join 500+ developers, designers, and innovators for 48 hours of coding, creativity, and collaboration at the biggest hackathon of 2025.
                <span className="block mt-2">Build the future with cutting-edge technology</span>
              </p>
            </div>

            {/* Right Side - Animated GIF Placeholder */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-60 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center animate-float shadow-2xl overflow-hidden relative border-2 border-red-900">
                  {/* Floating Elements - Positioned in GIF container corners */}
                  <div className="absolute top-2 left-2 text-lg animate-float-scary">👻</div>
                  <div className="absolute top-2 right-2 text-lg animate-float-scary" style={{ animationDelay: '1s' }}>🔥</div>
                  <div className="absolute bottom-8 left-2 text-lg animate-float-scary" style={{ animationDelay: '2s' }}>⚡</div>
                  <div className="absolute bottom-8 right-2 text-lg animate-float-scary" style={{ animationDelay: '1.5s' }}>💀</div>

                  {/* Spooky Code Elements - In GIF container corners */}
                  <div className="absolute top-6 left-2 text-xs font-mono text-red-400 animate-glitch">ERROR</div>
                  <div className="absolute top-6 right-2 text-xs font-mono text-red-400 animate-glitch" style={{ animationDelay: '0.7s' }}>404</div>
                  <div className="absolute bottom-12 left-2 text-xs font-mono text-red-400 animate-glitch" style={{ animationDelay: '1.4s' }}>HACK</div>

                  {/* Scary Animation Text - Bottom center of GIF */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-red-400 font-medium animate-pulse">Haunting</span>
                      <div className="flex space-x-0.5">
                        <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Scary Animated Character */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Character Container with Drop Animation */}
                    {showGhostInGif ? (
                      <div className="animate-drop-in relative">
                        {/* Ghost Message - Appears 2 seconds after ghost arrives */}
                        {showGhostMessage && (
                          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-ghost-message z-10">
                            <div className="bg-black/90 text-white px-4 py-2 rounded-lg shadow-lg border border-red-500/70 backdrop-blur-sm">
                              <div className="text-center">
                                <p className="text-sm font-medium text-red-400 whisper-text">Welcome to the Hackathon! (Web)</p>
                                <p className="text-xs text-gray-300 mt-1 whisper-text opacity-80"></p>
                              </div>
                              {/* Speech bubble arrow */}
                              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                            </div>
                          </div>
                        )}

                        {/* Scary Ghost/Demon Character */}
                        <div className="relative">
                          {/* Ghost Body */}
                          <div className="w-20 h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full mx-auto relative animate-scary-float">
                            {/* Scary Face */}
                            {/* Glowing Red Eyes */}
                            <div className="absolute top-6 left-5 w-3 h-3 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50"></div>
                            <div className="absolute top-6 right-5 w-3 h-3 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50" style={{ animationDelay: '0.5s' }}></div>

                            {/* Dark Eye Sockets */}
                            <div className="absolute top-5 left-4 w-5 h-5 bg-black rounded-full"></div>
                            <div className="absolute top-5 right-4 w-5 h-5 bg-black rounded-full"></div>

                            {/* Scary Mouth */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-black rounded-full">
                              {/* Teeth */}
                              <div className="absolute top-0 left-2 w-1 h-2 bg-white transform rotate-12"></div>
                              <div className="absolute top-0 left-3 w-1 h-3 bg-white"></div>
                              <div className="absolute top-0 right-3 w-1 h-3 bg-white"></div>
                              <div className="absolute top-0 right-2 w-1 h-2 bg-white transform -rotate-12"></div>
                            </div>

                            {/* Horns */}
                            <div className="absolute -top-2 left-6 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-800 transform -rotate-12"></div>
                            <div className="absolute -top-2 right-6 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-800 transform rotate-12"></div>

                            {/* Wispy Bottom */}
                            <div className="absolute -bottom-2 left-2 w-4 h-6 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp"></div>
                            <div className="absolute -bottom-3 left-6 w-3 h-8 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.3s' }}></div>
                            <div className="absolute -bottom-2 right-2 w-4 h-6 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.6s' }}></div>
                            <div className="absolute -bottom-4 right-6 w-3 h-7 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.9s' }}></div>

                            {/* Floating Arms */}
                            <div className="absolute top-10 -left-6 w-8 h-3 bg-gray-400 rounded-full animate-scary-arms"></div>
                            <div className="absolute top-10 -right-6 w-8 h-3 bg-gray-400 rounded-full animate-scary-arms" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Empty state while ghost is spinning */
                      <div className="flex items-center justify-center">
                        <div className="text-gray-500 text-lg font-medium animate-pulse">Loading...</div>
                      </div>
                    )}

                    {/* Eerie Glow Effect with Page Opening Animation */}
                    <div className="absolute inset-0 bg-red-500/10 rounded-2xl animate-pulse animate-fade-in-scale"></div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button 
              onClick={() => onNavigate('register')}
              className="inline-flex items-center justify-center whitespace-nowrap gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none bg-slate-950 hover:bg-slate-900 text-white rounded-md cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 sm:h-5 w-4 sm:w-5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
              Register Here
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none bg-white text-black hover:bg-gray-100 rounded-md cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 sm:h-5 w-4 sm:w-5">
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
              View Schedule
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-16 sm:mt-24 md:mt-40 lg:mt-48 pt-6 sm:pt-8 border-t transition-all duration-300 border-gray-300">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold transition-colors duration-300 text-gray-900">500+</div>
              <div className="text-xs sm:text-sm transition-colors duration-300 text-gray-600">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold transition-colors duration-300 text-gray-900">48</div>
              <div className="text-xs sm:text-sm transition-colors duration-300 text-gray-600">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold transition-colors duration-300 text-gray-900">$50K</div>
              <div className="text-xs sm:text-sm transition-colors duration-300 text-gray-600">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold transition-colors duration-300 text-gray-900">20+</div>
              <div className="text-xs sm:text-sm transition-colors duration-300 text-gray-600">Sponsors</div>
            </div>
          </div>
        </div>
      </div>


    </section >
  );
};

export default Hero;