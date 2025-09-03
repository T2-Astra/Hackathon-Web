import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { currentTheme } = useTheme();
  const isMatrix = currentTheme === 'redMatrix';
  const [showScrollGhost, setShowScrollGhost] = useState(false);
  const whyParticipateRef = useRef(null);
  const features = [
    {
      icon: "🚀",
      title: "Innovation Focus",
      description: "Build cutting-edge solutions using the latest technologies and frameworks."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Work with talented individuals from diverse backgrounds and skill sets."
    },
    {
      icon: "🏆",
      title: "Amazing Prizes",
      description: "Compete for cash prizes, internships, and exclusive tech swag."
    },
    {
      icon: "📚",
      title: "Learning Experience",
      description: "Attend workshops, mentorship sessions, and technical talks."
    }
  ];

  // Scroll detection for "Why Participate?" section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowScrollGhost(true);
            // Hide ghost after 2 seconds
            setTimeout(() => {
              setShowScrollGhost(false);
            }, 2000);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger a bit before the section is fully visible
      }
    );

    if (whyParticipateRef.current) {
      observer.observe(whyParticipateRef.current);
    }

    return () => {
      if (whyParticipateRef.current) {
        observer.unobserve(whyParticipateRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={`py-20 ${isMatrix ? 'bg-transparent' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold font-space mb-6 ${isMatrix ? 'text-green-400' : 'text-gray-900'}`}>
            What is <span className="gradient-text">HackFest?</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isMatrix ? 'text-green-300' : 'text-gray-600'}`}>
            HackFest 2025 is a premier hackathon bringing together the brightest minds in technology.
            Over 48 hours, participants will collaborate, innovate, and build solutions that could change the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className={`text-center p-6 rounded-2xl card-hover ${isMatrix ? 'bg-green-900/20 border border-green-500/30' : 'bg-gray-50'}`}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-semibold mb-3 font-space ${isMatrix ? 'text-green-400' : 'text-gray-900'}`}>{feature.title}</h3>
              <p className={`leading-relaxed ${isMatrix ? 'text-green-300' : 'text-gray-600'}`}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`rounded-3xl p-8 md:p-12 relative overflow-hidden ${isMatrix ? 'bg-green-900/10 border border-green-500/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
          {/* Scroll-triggered Ghost Animation */}
          {showScrollGhost && (
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="animate-scroll-ghost-appear">
                {/* Ghost Character */}
                <div className="w-12 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full relative animate-scary-float">
                  {/* Glowing Red Eyes */}
                  <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50"></div>
                  <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-scary-glow shadow-lg shadow-red-500/50" style={{ animationDelay: '0.5s' }}></div>

                  {/* Dark Eye Sockets */}
                  <div className="absolute top-2.5 left-1.5 w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-2.5 right-1.5 w-3 h-3 bg-black rounded-full"></div>

                  {/* Scary Mouth */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black rounded-full">
                    {/* Teeth */}
                    <div className="absolute top-0 left-0.5 w-0.5 h-1 bg-white transform rotate-12"></div>
                    <div className="absolute top-0 left-1.5 w-0.5 h-1.5 bg-white"></div>
                    <div className="absolute top-0 right-1.5 w-0.5 h-1.5 bg-white"></div>
                    <div className="absolute top-0 right-0.5 w-0.5 h-1 bg-white transform -rotate-12"></div>
                  </div>

                  {/* Horns */}
                  <div className="absolute -top-0.5 left-3 w-0 h-0 border-l border-r border-b-2 border-transparent border-b-red-800 transform -rotate-12"></div>
                  <div className="absolute -top-0.5 right-3 w-0 h-0 border-l border-r border-b-2 border-transparent border-b-red-800 transform rotate-12"></div>

                  {/* Wispy Bottom */}
                  <div className="absolute -bottom-0.5 left-0.5 w-2 h-3 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp"></div>
                  <div className="absolute -bottom-1 left-2.5 w-1.5 h-4 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute -bottom-0.5 right-0.5 w-2 h-3 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute -bottom-1.5 right-2.5 w-1.5 h-3 bg-gradient-to-b from-gray-400 to-transparent rounded-b-full animate-wisp" style={{ animationDelay: '0.9s' }}></div>

                  {/* Floating Arms */}
                  <div className="absolute top-6 -left-3 w-4 h-1.5 bg-gray-400 rounded-full animate-scary-arms"></div>
                  <div className="absolute top-6 -right-3 w-4 h-1.5 bg-gray-400 rounded-full animate-scary-arms" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={whyParticipateRef}>
              <h3 className={`text-3xl font-bold font-space mb-6 ${isMatrix ? 'text-green-400' : 'text-gray-900'}`}>
                Why Participate?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className={isMatrix ? 'text-green-300' : 'text-gray-700'}>Network with industry professionals and like-minded peers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className={isMatrix ? 'text-green-300' : 'text-gray-700'}>Learn new technologies and development practices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Build your portfolio with real-world projects</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Win amazing prizes and recognition</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold font-space text-gray-900 mb-4">Event Details</h4>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">March 15-17, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">48 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">Tech Hub Center</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team Size:</span>
                    <span className="font-semibold">2-4 Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;