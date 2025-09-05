import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();
  const isMatrix = currentTheme === 'redMatrix';
  const isDarkGrid = currentTheme === 'emerald';
  const isDark = isMatrix || isDarkGrid;
  
  return (
    <footer className={`py-16 relative ${isDark ? 'bg-transparent text-gray-300' : 'bg-[#f8fafc] text-gray-900'} ${isMatrix ? 'text-green-300' : ''}`}>
      {/* Grid Background Pattern - Only show for non-Matrix themes */}
      {!isMatrix && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: isDarkGrid 
              ? `linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)`
              : `linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                 linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: "20px 30px",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-3xl font-bold font-space mb-4 ${isMatrix ? 'text-green-400' : 'gradient-text'}`}>HackFest 2025</h3>
            <p className={`mb-6 max-w-md ${isMatrix ? 'text-green-300' : 'text-gray-600'}`}>
              Join us for the biggest hackathon of 2025. Build the future with 500+ developers,
              designers, and innovators over 48 hours of coding and creativity.
            </p>
            <div className="flex space-x-4">

              <a href="https://github.com/T2-Astra" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isMatrix ? 'bg-green-900/30 text-green-400 hover:bg-green-800/50 hover:text-green-300' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>



          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold font-space mb-4 ${isMatrix ? 'text-green-400' : 'text-gray-900'}`}>Contact</h4>
            <ul className={`space-y-2 ${isMatrix ? 'text-green-300' : 'text-gray-600'}`}>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@hackfest2025.com
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Tech Hub Center, Silicon Valley
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`pt-8 mb-8 ${isMatrix ? 'border-t border-green-500/30' : 'border-t border-gray-300'}`}>
          <div className="max-w-md mx-auto text-center">
            <h4 className={`text-lg font-semibold font-space mb-4 ${isMatrix ? 'text-green-400' : 'text-gray-900'}`}>Stay Updated</h4>
            <p className={`mb-4 ${isMatrix ? 'text-green-300' : 'text-gray-600'}`}>Get the latest updates about HackFest 2025</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-l-full focus:outline-none ${isMatrix
                  ? 'bg-green-900/20 border border-green-500/30 text-green-300 placeholder-green-400 focus:border-green-400'
                  : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  }`}
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-r-full font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Credits Section */}
        <div className={`pt-8 mb-8 text-center ${isMatrix ? 'border-t border-green-500/30' : 'border-t border-gray-300'}`}>
          <div className={`rounded-2xl p-6 ${isMatrix ? 'bg-green-900/10 border border-green-500/20' : 'bg-gray-100'}`}>
            <h4 className={`text-lg font-semibold font-space mb-3 ${isMatrix ? 'text-green-400' : 'text-gray-900'}`}>
              Made with ❤️ by
            </h4>
            <div className={`text-center ${isMatrix ? 'text-green-300' : 'text-gray-700'}`}>
              <p className="font-medium text-lg mb-2">Krish Mhatre</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a
                  href="mailto:krishmhatre34@gmail.com"
                  className={`flex items-center gap-2 transition-colors ${isMatrix ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  krishmhatre34@gmail.com
                </a>
                <a
                  href="https://github.com/T2-Astra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors ${isMatrix ? 'text-green-400 hover:text-green-300' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub: T2-Astra
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center ${isMatrix ? 'border-t border-green-500/30' : 'border-t border-gray-300'}`}>
          <p className={`text-sm mb-4 md:mb-0 ${isMatrix ? 'text-green-300' : 'text-gray-600'}`}>
            © 2025 HackFest. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className={`transition-colors ${isMatrix ? 'text-green-300 hover:text-green-400' : 'text-gray-600 hover:text-gray-900'}`}>Privacy Policy</a>
            <a href="#" className={`transition-colors ${isMatrix ? 'text-green-300 hover:text-green-400' : 'text-gray-600 hover:text-gray-900'}`}>Terms of Service</a>
            <a href="#" className={`transition-colors ${isMatrix ? 'text-green-300 hover:text-green-400' : 'text-gray-600 hover:text-gray-900'}`}>Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;