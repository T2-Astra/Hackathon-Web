import React from 'react';

const Timeline = () => {
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
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-6">
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div className="flex items-center mb-3">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {event.day}
                      </span>
                      <span className="text-gray-600 font-medium">{event.time}</span>
                    </div>
                    <h3 className="text-xl font-bold font-space text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-space text-gray-900 mb-4">
              Important Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <span className="text-2xl mr-3">⏰</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Be Punctual</h4>
                  <p className="text-gray-600 text-sm">Arrive on time for all scheduled events</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🍕</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Free Meals</h4>
                  <p className="text-gray-600 text-sm">All meals and snacks are provided</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">💤</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Rest Areas</h4>
                  <p className="text-gray-600 text-sm">Quiet zones available for power naps</p>
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