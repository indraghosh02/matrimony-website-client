import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const BiodataForm = () => {
    const {user} = useContext(AuthContext);
  const divisions = ["Dhaka", "Chattagram", "Rangpur", "Barisal", "Khulna", "Maymansign", "Sylhet"];
  // Assuming email is fetched and set

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-3xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Biodata Form</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Biodata Type</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                <option value="">Select Type</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="profile-image" className="block text-sm font-medium text-gray-700">
                Profile Image
              </label>
              <input
                type="file"
                id="profile-image"
                name="profile-image"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height
              </label>
              <select
                id="height"
                name="height"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Height</option>
                <option value="4'">4'</option>
                <option value="5'">5'</option>
                <option value="6'">6'</option>
                <option value="7'">7'</option>
              </select>
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <select
                id="weight"
                name="weight"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Weight</option>
                <option value="50kg">50kg</option>
                <option value="60kg">60kg</option>
                <option value="70kg">70kg</option>
                <option value="80kg">80kg</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <select
                id="occupation"
                name="occupation"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="race" className="block text-sm font-medium text-gray-700">
                Race
              </label>
              <select
                id="race"
                name="race"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Race</option>
                <option value="Asian">Asian</option>
                <option value="African">African</option>
                <option value="Caucasian">Caucasian</option>
                <option value="Hispanic">Hispanic</option>
              </select>
            </div>
            <div>
              <label htmlFor="fathers-name" className="block text-sm font-medium text-gray-700">
                Father's Name
              </label>
              <input
                type="text"
                id="fathers-name"
                name="fathers-name"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="mothers-name" className="block text-sm font-medium text-gray-700">
                Mother's Name
              </label>
              <input
                type="text"
                id="mothers-name"
                name="mothers-name"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="permanent-division" className="block text-sm font-medium text-gray-700">
                Permanent Division
              </label>
              <select
                id="permanent-division"
                name="permanent-division"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Division</option>
                {divisions.map((division) => (
                  <option key={division} value={division}>{division}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="present-division" className="block text-sm font-medium text-gray-700">
                Present Division
              </label>
              <select
                id="present-division"
                name="present-division"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Division</option>
                {divisions.map((division) => (
                  <option key={division} value={division}>{division}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="expected-partner-age" className="block text-sm font-medium text-gray-700">
                Expected Partner Age
              </label>
              <input
                type="number"
                id="expected-partner-age"
                name="expected-partner-age"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="expected-partner-height" className="block text-sm font-medium text-gray-700">
                Expected Partner Height
              </label>
              <select
                id="expected-partner-height"
                name="expected-partner-height"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Height</option>
                <option value="4'">4'</option>
                <option value="5'">5'</option>
                <option value="6'">6'</option>
                <option value="7'">7'</option>
              </select>
            </div>
            <div>
              <label htmlFor="expected-partner-weight" className="block text-sm font-medium text-gray-700">
                Expected Partner Weight
              </label>
              <select
                id="expected-partner-weight"
                name="expected-partner-weight"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select Weight</option>
                <option value="50kg">50kg</option>
                <option value="60kg">60kg</option>
                <option value="70kg">70kg</option>
                <option value="80kg">80kg</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="contact-email"
                value={user.email}
                readOnly
                className="w-full px-3 py-2 mt-1 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile-number"
                name="mobile-number"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Submit
            </button>
            <button
              type="reset"
              className="px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BiodataForm;
