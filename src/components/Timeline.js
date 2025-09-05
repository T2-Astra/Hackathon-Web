import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Timeline = () => {
  const { currentTheme } = useTheme();
  const isMatrix = currentTheme === 'redMatrix';
  const isDarkGrid = currentTheme === 'emerald';
  const shouldUseDarkStyling = isDarkGrid; // Only Dark Grid theme gets dark styling
  const events = [
    {
      time: "6:00 PM",
      day: "Friday",
      title: "Registration & Check-in",
      description: "Welcome reception, team formation, and event kickoff"
    },
    {
      time: "7:00 PM",
      day: "Friday",
      title: "Opening Ceremony",
      description: "Keynote speakers, rules explanation, and theme announcement"
    },
    {
      time: "8:00 PM",
      day: "Friday",
      title: "Hacking Begins!",
      description: "Teams start working on their projects"
    },
    {
      time: "10:00 PM",
      day: "Friday",
      title: "Late Night Snacks",
      description: "Pizza and energy drinks to fuel your creativity"
    },
    {
      time: "8:00 AM",
      day: "Saturday",
      title: "Breakfast & Workshops",
      description: "Morning fuel and technical workshops"
    },
    {
      time: "12:00 PM",
      day: "Saturday",
      title: "Lunch Break",
      description: "Networking lunch with mentors and sponsors"
    },
    {
      time: "2:00 PM",
      day: "Saturday",
      title: "Mentor Sessions",
      description: "One-on-one guidance from industry experts"
    },
    {
      time: "8:00 PM",
      day: "Saturday",
      title: "Dinner & Entertainment",
      description: "Dinner break with live music and games"
    },
    {
      time: "8:00 AM",
      day: "Sunday",
      title: "Final Sprint",
      description: "Last chance to polish your projects"
    },
    {
      time: "12:00 PM",
      day: "Sunday",
      title: "Submissions Due",
      description: "All projects must be submitted by this time"
    },
    {
      time: "1:00 PM",
      day: "Sunday",
      title: "Project Presentations",
      description: "Teams present their solutions to judges"
    },
    {
      time: "4:00 PM",
      day: "Sunday",
      title: "Awards Ceremony",
      description: "Winner announcements and prize distribution"
    }
  ];

  return (
    <section id="timeline" className={`py-20 ${isMatrix ? 'bg-transparent' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold font-space mb-6 ${isMatrix ? 'text-green-400' : shouldUseDarkStyling ? 'text-white' : 'text-gray-900'}`}>
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isMatrix ? 'text-green-300' : shouldUseDarkStyling ? 'text-gray-300' : 'text-gray-600'}`}>
            A carefully planned 48-hour journey from idea to implementation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`rounded-2xl p-6 shadow-lg card-hover ${isMatrix ? 'bg-green-900/20 border border-green-500/30' : shouldUseDarkStyling ? 'bg-gray-800/50 border border-gray-600/30' : 'bg-white'}`}>
                    <div className="flex items-center mb-3">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {event.day}
                      </span>
                      <span className={`font-medium ${isMatrix ? 'text-green-300' : shouldUseDarkStyling ? 'text-gray-300' : 'text-gray-600'}`}>{event.time}</span>
                    </div>
                    <h3 className={`text-xl font-bold font-space mb-2 ${isMatrix ? 'text-green-400' : shouldUseDarkStyling ? 'text-white' : 'text-gray-900'}`}>{event.title}</h3>
                    <p className={isMatrix ? 'text-green-300' : shouldUseDarkStyling ? 'text-gray-300' : 'text-gray-600'}>{event.description}</p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className={`rounded-2xl p-8 ${isMatrix ? 'bg-green-900/10 border border-green-500/20' : shouldUseDarkStyling ? 'bg-gray-800/30 border border-gray-600/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
            <h3 className={`text-2xl font-bold font-space mb-4 ${isMatrix ? 'text-green-400' : shouldUseDarkStyling ? 'text-white' : 'text-gray-900'}`}>
              Important Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <span className="text-2xl mr-3">⏰</span>
                <div>
                  <h4 className={`font-semibold mb-1 ${isMatrix ? 'text-green-400' : shouldUseDarkStyling ? 'text-white' : 'text-gray-900'}`}>Be Punctual</h4>
                  <p className={`text-sm ${isMatrix ? 'text-green-300' : shouldUseDarkStyling ? 'text-gray-300' : 'text-gray-600'}`}>Arrive on time for all scheduled events</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🍕</span>
                <div>
                  <h4 className={`font-semibold mb-1 ${isMatrix ? 'text-green-400' : shouldUseDarkStyling ? 'text-white' : 'text-gray-900'}`}>Free Meals</h4>
                  <p className={`text-sm ${isMatrix ? 'text-green-300' : shouldUseDarkStyling ? 'text-gray-300' : 'text-gray-600'}`}>All meals and snacks are provided</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">💤</span>
                <div>
                  <h4 className={`font-semibold mb-1 ${isMatrix ? 'text-green-400' : shouldUseDarkStyling ? 'text-white' : 'text-gray-900'}`}>Rest Areas</h4>
                  <p className={`text-sm ${isMatrix ? 'text-green-300' : shouldUseDarkStyling ? 'text-gray-300' : 'text-gray-600'}`}>Quiet zones available for power naps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;