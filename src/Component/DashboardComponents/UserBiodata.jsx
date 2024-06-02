import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const UserBiodata = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };
 
    const divisions = ["Dhaka", "Chattagram", "Rangpur", "Barisal", "Khulna", "Maymansign", "Sylhet"];

    useEffect(() => {
        if (user) {
            fetchUserBiodata(user.email);
        }
    }, [user]);

    const fetchUserBiodata = async (email) => {
        try {
            const response = await fetch(`http://localhost:5000/biodata/user/${email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user biodata');
            }
            const userBiodata = await response.json();
            setBiodata(userBiodata);
        } catch (error) {
            console.error('Error fetching user biodata:', error);
        }
    };

    return (
        <div>
            
            {biodata ? (
                
            //    <div className="p-6">
            //     <h2 className="text-center text-4xl text-white bg-blue-700 font-serif font-bold pt-4">Your Biodata</h2>
            //    <div className="min-h-screen flex items-center justify-center bg-blue-700  p-6">
            //      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
            //        <h2 className="text-4xl font-bold mb-4 text-center font-serif text-red-600 pb-4">{biodata.name}'s Biodata</h2>
            //        <div className="flex flex-col lg:flex-row items-center lg:items-start">
            //          <img className="w-48 h-48 rounded-full mx-auto lg:mx-0 lg:mr-8" src={biodata.image} alt="Profile" />
            //          <div className="mt-6 lg:mt-0">
            //            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            //              <p><strong>Gender:</strong> {biodata.type}</p>
            //              <p><strong>Date of Birth:</strong> {biodata.date}</p>
            //              <p><strong>Height:</strong> {biodata.height}</p>
            //              <p><strong>Weight:</strong> {biodata.weight}</p>
            //              <p><strong>Age:</strong> {biodata.age}</p>
            //              <p><strong>Occupation:</strong> {biodata.occupation}</p>
            //              <p><strong>Race:</strong> {biodata.race}</p>
            //              <p><strong>Father's Name:</strong> {biodata.fName}</p>
            //              <p><strong>Mother's Name:</strong> {biodata.mName}</p>
            //              <p><strong>Permanent Division:</strong> {biodata.permanentDivision}</p>
            //              <p><strong>Present Division:</strong> {biodata.presentDivision}</p>
            //              <p><strong>Expected Partner Age:</strong> {biodata.partnerAge}</p>
            //              <p><strong>Expected Partner Height:</strong> {biodata.partnerHeight}</p>
            //              <p><strong>Expected Partner Weight:</strong> {biodata.partnerWeight}</p>
            //              <p><strong>Contact Email:</strong> {biodata.email}</p>
            //              <p><strong>Mobile Number:</strong> {biodata.number}</p>
            //              <div className="flex justify-center gap-4">
            //               <button 
            //                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                            
            //                >
            //                 Edit
            //                </button>
                         
            //              </div>
            //            </div>
            //          </div>
            //        </div>
            //      </div>
            //    </div>
         
             
            //  </div>




            <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
 
            <div className="w-full max-w-3xl p-8 space-y-6 bg-white rounded-lg shadow-md">
              <h2 className="text-4xl font-serif font-bold text-center text-blue-600">Edit Your Biodata</h2>
              <form  className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Biodata Type</label>
                    <select
                      id="type"
                      name="type"
                     
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                     <option defaultValue={biodata.type}>{biodata.type}</option>
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
                      defaultValue={biodata.name}
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Profile Image
                    </label>
                    {/* <input
                      type="file"
                      id="image"
                      name="image"
                      defaultValue={biodata.image}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    /> */}
                    <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" className="mt-4 h-32 w-32 object-cover" />
              ) : (
                <img src={biodata.image} alt="Current" className="mt-4 h-32 w-32 object-cover" />
              )}
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      defaultValue={biodata.date}
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
                     <option defaultValue={biodata.height}>{biodata.height}</option>
                      <option value="4'">4'-4.5'</option>
                      <option value="5'">4.6'-5</option>
                      <option value="6'">5.1'-6'</option>
                      <option value="7'">6'-7'</option>
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
                      <option defaultValue={biodata.weight}>{biodata.weight}</option>
                      <option value="50kg">40kg-50kg</option>
                      <option value="60kg">50kg-60kg</option>
                      <option value="70kg">60kg-70kg</option>
                      <option value="80kg">70kg-80kg</option>
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
                      defaultValue={biodata.age}
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
                      <option defaultValue={biodata.occupation}>{biodata.occupation}</option>
                      <option value="Student">Student</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Businessman">Businessman</option>
                      <option value="Others">Others</option>
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
                      <option defaultValue={biodata.race}>{biodata.race}</option>
                      <option value="Asian">Asian</option>
                      <option value="African">African</option>
                      <option value="Caucasian">Caucasian</option>
                      <option value="Hispanic">Hispanic</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="father_name" className="block text-sm font-medium text-gray-700">
                      Father's Name
                    </label>
                    <input
                      type="text"
                      id="father_name"
                      name="father_name"
                      defaultValue={biodata.fName}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="mother_name" className="block text-sm font-medium text-gray-700">
                      Mother's Name
                    </label>
                    <input
                      type="text"
                      id="mother_name"
                      name="mother_name"
                      defaultValue={biodata.mName}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="permanent" className="block text-sm font-medium text-gray-700">
                      Permanent Division
                    </label>
                    <select
                      id="permanent"
                      name="permanent"
                      
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.permanentDivision}>{biodata.permanentDivision}</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>{division}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="present" className="block text-sm font-medium text-gray-700">
                      Present Division
                    </label>
                    <select
                      id="present"
                      name="present"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.presentDivision}>{biodata.presentDivision}</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>{division}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expected_partner_age" className="block text-sm font-medium text-gray-700">
                      Expected Partner Age
                    </label>
                    <input
                      type="number"
                      id="expected_partner_age"
                      name="expected_partner_age"
                      defaultValue={biodata.partnerAge}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="expected_partner_height" className="block text-sm font-medium text-gray-700">
                      Expected Partner Height
                    </label>
                    <select
                      id="expected_partner_height"
                      name="expected_partner_height"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      
                      <option defaultValue={biodata.partnerHeight}>{biodata.partnerHeight}</option>
                      <option value="4'">4'-4.5'</option>
                      <option value="5'">4.6'-5</option>
                      <option value="6'">5.1'-6'</option>
                      <option value="7'">6'-7'</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expected_partner_weight" className="block text-sm font-medium text-gray-700">
                      Expected Partner Weight
                    </label>
                    <select
                      id="expected_partner_weight"
                      name="expected_partner_weight"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.partnerWeight}>{biodata.partnerWeight}</option>
                      <option value="50kg">40kg-50kg</option>
                      <option value="60kg">50kg-60kg</option>
                      <option value="70kg">60kg-70kg</option>
                      <option value="80kg">70kg-80kg</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      readOnly
                      className="w-full px-3 py-2 mt-1 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      defaultValue={biodata.number}
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
                    Edit Biodata
                  </button>
                
                </div>
              </form>
            </div>
          </div>
            ) : (
                <p>No biodata found for the user.</p>
            )}
        </div>
    );
};

export default UserBiodata;
