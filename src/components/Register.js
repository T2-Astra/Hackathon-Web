import React, { useState } from 'react';

const Register = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        collegeName: '',
        department: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Registration submitted! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            collegeName: '',
            department: '',
            phone: ''
        });
    };

    return (
        <section className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back to Home Button */}
                <div className="mb-8">
                    <button
                        onClick={() => onNavigate('home')}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors text-gray-600 hover:text-gray-900 border border-gray-300 hover:bg-gray-50"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </button>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-space mb-6 text-gray-900">
                        Register for <span className="gradient-text">HackFest 2025</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-600">
                        Join 500+ developers, designers, and innovators for 48 hours of coding and creativity
                    </p>
                </div>

                {/* Registration Form */}
                <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-colors border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-colors border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            {/* College Name */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    College/University Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.collegeName}
                                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-colors border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your college or university name"
                                />
                            </div>

                            {/* Department */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    Department/Field of Study *
                                </label>
                                <select
                                    required
                                    value={formData.department}
                                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-colors border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select your department</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Information Technology">Information Technology</option>
                                    <option value="Software Engineering">Software Engineering</option>
                                    <option value="Electrical Engineering">Electrical Engineering</option>
                                    <option value="Electronics Engineering">Electronics Engineering</option>
                                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                                    <option value="Civil Engineering">Civil Engineering</option>
                                    <option value="Business Administration">Business Administration</option>
                                    <option value="Design">Design</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    Phone Number (Optional)
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-colors border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Register for HackFest 2025
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500">
                                By registering, you agree to our{' '}
                                <a href="#" className="underline text-blue-600 hover:text-blue-500">
                                    terms and conditions
                                </a>{' '}
                                and{' '}
                                <a href="#" className="underline text-blue-600 hover:text-blue-500">
                                    privacy policy
                                </a>.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Event Info */}
                <div className="mt-12 rounded-2xl p-6 bg-white shadow-lg">
                    <h3 className="text-xl font-bold font-space mb-4 text-gray-900">
                        Event Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-semibold text-gray-900">March 15-17, 2025</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-semibold text-gray-900">48 Hours</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Location:</span>
                            <span className="font-semibold text-gray-900">Tech Hub Center</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Team Size:</span>
                            <span className="font-semibold text-gray-900">2-4 Members</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;