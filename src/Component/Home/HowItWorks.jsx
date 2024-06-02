import React from 'react';

const HowItWorks = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">How It Works</h2>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <img src="https://i.ibb.co/3r4pRvG/profile-creation.png" alt="Create Profile" className="w-24 h-24 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Create Profile</h3>
          <p className="text-gray-700">Sign up and create a detailed profile to get started on your journey to find the perfect match.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <img src="https://i.ibb.co/7n3dKZB/browse-profiles.png" alt="Browse Profiles" className="w-24 h-24 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Browse Profiles</h3>
          <p className="text-gray-700">Explore numerous profiles and find people who share your interests and values.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <img src="https://i.ibb.co/Qk9K8Xw/connect.png" alt="Connect" className="w-24 h-24 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Connect</h3>
          <p className="text-gray-700">Reach out and connect with potential matches to start meaningful conversations.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
