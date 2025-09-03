import React from 'react';

const Prizes = () => {
  const prizes = [
    {
      place: "1st Place",
      amount: "$20,000",
      icon: "🥇",
      color: "from-yellow-400 to-orange-500",
      benefits: ["Cash Prize", "Internship Opportunities", "Mentorship Program", "Premium Swag Kit"]
    },
    {
      place: "2nd Place", 
      amount: "$15,000",
      icon: "🥈",
      color: "from-gray-300 to-gray-500",
      benefits: ["Cash Prize", "Tech Gadgets", "Workshop Access", "Swag Kit"]
    },
    {
      place: "3rd Place",
      amount: "$10,000", 
      icon: "🥉",
      color: "from-amber-600 to-amber-800",
      benefits: ["Cash Prize", "Online Courses", "Networking Events", "Swag Kit"]
    }
  ];

  const specialPrizes = [
    {
      title: "Best AI/ML Solution",
      prize: "$5,000",
      sponsor: "TechCorp AI"
    },
    {
      title: "Most Innovative Design",
      prize: "$3,000", 
      sponsor: "Design Studio"
    },
    {
      title: "Best Social Impact",
      prize: "$3,000",
      sponsor: "Social Good Foundation"
    },
    {
      title: "People's Choice Award",
      prize: "$2,000",
      sponsor: "Community Vote"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-6">
            Amazing <span className="gradient-text">Prizes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compete for over $50,000 in prizes, internships, and exclusive opportunities
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div key={index} className={`relative bg-gradient-to-br ${prize.color} rounded-3xl p-8 text-white card-hover transform ${index === 0 ? 'md:scale-110 md:z-10' : ''}`}>
              <div className="text-center">
                <div className="text-6xl mb-4">{prize.icon}</div>
                <h3 className="text-2xl font-bold font-space mb-2">{prize.place}</h3>
                <div className="text-4xl font-bold font-space mb-6">{prize.amount}</div>
                <ul className="space-y-2 text-left">
                  {prize.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Grand Prize
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold font-space text-gray-900 text-center mb-8">
            Special Category Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold font-space text-gray-900 mb-2">{award.title}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">{award.prize}</div>
                <p className="text-sm text-gray-600">Sponsored by {award.sponsor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-space text-gray-900 mb-8">
            Everyone Gets Something!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎒</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Swag Bag</h4>
              <p className="text-gray-600">T-shirts, stickers, and tech accessories for all participants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📜</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Certificate</h4>
              <p className="text-gray-600">Official participation certificate for your portfolio</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Networking</h4>
              <p className="text-gray-600">Connect with industry professionals and potential employers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;