import React from 'react';

const Sponsors = () => {
  const platinumSponsors = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
  ];

  const goldSponsors = [
    { name: "CodeBase", logo: "CB" },
    { name: "DevTools Pro", logo: "DT" },
    { name: "CloudTech", logo: "CT" },
  ];

  const silverSponsors = [
    { name: "StartupHub", logo: "SH" },
    { name: "TechVenture", logo: "TV" },
    { name: "CodeAcademy", logo: "CA" },
    { name: "WebFlow", logo: "WF" },
  ];

  const SponsorCard = ({ sponsor, size = "medium" }) => {
    const sizeClasses = {
      large: "w-32 h-32 text-2xl",
      medium: "w-24 h-24 text-xl", 
      small: "w-20 h-20 text-lg"
    };

    return (
      <div className="flex flex-col items-center">
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center font-bold text-gray-700 card-hover shadow-lg`}>
          {sponsor.logo}
        </div>
        <span className="mt-3 text-gray-600 font-medium text-center">{sponsor.name}</span>
      </div>
    );
  };

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-6">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thanks to our amazing sponsors who make this event possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-space text-center text-gray-900 mb-8">
            Platinum Sponsors
          </h3>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {platinumSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} size="large" />
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-space text-center text-gray-900 mb-8">
            Gold Sponsors
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} size="medium" />
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-lg font-bold font-space text-center text-gray-900 mb-8">
            Silver Sponsors
          </h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {silverSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} size="small" />
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold font-space mb-4">
            Want to Sponsor HackFest 2025?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join our community of innovative companies supporting the next generation of developers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Brand Exposure</h4>
              <p className="text-sm opacity-80">Reach 500+ talented developers and tech enthusiasts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold mb-2">Talent Recruitment</h4>
              <p className="text-sm opacity-80">Connect with top-tier candidates for your team</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Innovation Support</h4>
              <p className="text-sm opacity-80">Support cutting-edge projects and ideas</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Become a Sponsor
          </button>
        </div>

        {/* Sponsor Benefits */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold font-space text-center text-gray-900 mb-8">
            Sponsorship Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📢</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Logo Placement</h4>
              <p className="text-sm text-gray-600">Your logo on all event materials and website</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Speaking Opportunity</h4>
              <p className="text-sm text-gray-600">Present your company and tech stack</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Prize Sponsorship</h4>
              <p className="text-sm text-gray-600">Sponsor specific categories and awards</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
              <p className="text-sm text-gray-600">Featured across all our social channels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;