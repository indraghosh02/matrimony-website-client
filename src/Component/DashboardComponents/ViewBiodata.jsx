import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewBiodata = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    

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
   
    // const handleMakePremium = async () => {
    //     setIsModalVisible(false);
    //     try {
    //         const currentUser = {
    //             email: user?.email,
    //             role: 'user',
    //             isPremium: false,
    //             status: 'Requested'
    //         };
    //         const { data } = await axios.put(`http://localhost:5000/user`, currentUser);
    //         if (data.modifiedCount > 0) {
    //             toast.success('Success! Wait for admin approval');
    //         } else {
    //             toast.success('Wait for admin approval');
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         toast.error(err.message);
    //     }
    // };
    const handleMakePremium = async () => {
      setIsModalVisible(false);
      try {
          const currentUser = {
              email: user?.email,
              role: 'user',
              isPremium: false,
              status: 'Requested'
          };
  
          await axios.put(`http://localhost:5000/user`, currentUser);
          const { data } = await axios.post(`http://localhost:5000/premium-requests`, {
              email: user?.email,
              biodata: {
                  type: biodata.type,
                  name: biodata.name,
                  image: biodata.image,
                  date: biodata.date,
                  height: biodata.height,
                  weight: biodata.weight,
                  age: biodata.age,
                  occupation: biodata.occupation,
                  race: biodata.race,
                  fName: biodata.fName,
                  mName: biodata.mName,
                  permanentDivision: biodata.permanentDivision,
                  presentDivision: biodata.presentDivision,
                  partnerAge: biodata.partnerAge,
                  partnerHeight: biodata.partnerHeight,
                  partnerWeight: biodata.partnerWeight,
                  email: biodata.email,
                  number: biodata.number,
                  biodataId: biodata.biodataId // assuming you have biodataId in the original biodata object
              }
          });
  
          if (data.modifiedCount > 0) {
              toast.success('Success! Wait for admin approval');
          } else {
              toast.success('Wait for admin approval');
          }
      } catch (err) {
          console.error(err);
          toast.error(err.message);
      }
  };
  
  


    const showModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <div>
            {biodata ? (
                <div className="p-6">
                    <h2 className="text-center text-4xl text-white font-serif bg-blue-700 font-bold mb-5">
                        View Your Biodata
                    </h2>
                    <div className="min-h-screen flex items-center justify-center bg-blue-700 p-6">
                        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
                            <h2 className="text-4xl font-bold mb-4 text-center font-serif text-red-600 pb-4">
                                {biodata.name}'s Biodata
                            </h2>
                            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                                <img
                                    className="w-48 h-48 rounded-full mx-auto lg:mx-0 lg:mr-8"
                                    src={biodata.image}
                                    alt="Profile"
                                />
                                <div className="mt-6 lg:mt-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <p><strong>Gender:</strong> {biodata.type}</p>
                                        <p><strong>Date of Birth:</strong> {biodata.date}</p>
                                        <p><strong>Height:</strong> {biodata.height}</p>
                                        <p><strong>Weight:</strong> {biodata.weight}</p>
                                        <p><strong>Age:</strong> {biodata.age}</p>
                                        <p><strong>Occupation:</strong> {biodata.occupation}</p>
                                        <p><strong>Race:</strong> {biodata.race}</p>
                                        <p><strong>Father's Name:</strong> {biodata.fName}</p>
                                        <p><strong>Mother's Name:</strong> {biodata.mName}</p>
                                        <p><strong>Permanent Division:</strong> {biodata.permanentDivision}</p>
                                        <p><strong>Present Division:</strong> {biodata.presentDivision}</p>
                                        <p><strong>Expected Partner Age:</strong> {biodata.partnerAge}</p>
                                        <p><strong>Expected Partner Height:</strong> {biodata.partnerHeight}</p>
                                        <p><strong>Expected Partner Weight:</strong> {biodata.partnerWeight}</p>
                                        <p><strong>Contact Email:</strong> {biodata.email}</p>
                                        <p><strong>Mobile Number:</strong> {biodata.number}</p>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                onClick={showModal}
                                                className="bg-yellow-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                                            >
                                                Make biodata to premium
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No biodata found for the user.</p>
            )}

            {isModalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <h2 className="text-xl font-bold mb-4">Confirmation</h2>
                        <p>Are you sure you want to make your biodata premium?</p>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            >
                                No
                            </button>
                            <button
                                onClick={handleMakePremium}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewBiodata;



