import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const UserBiodata = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState(null);

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
                
               <div className="p-6">
                <h2 className="text-center text-4xl text-blue-700 font-bold">Your Biodata</h2>
               <div className="min-h-screen flex items-center justify-center bg-red-600 p-6">
                 <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
                   <h2 className="text-4xl font-bold mb-4 text-center font-serif text-red-600 pb-4">{biodata.name}'s Biodata</h2>
                   <div className="flex flex-col lg:flex-row items-center lg:items-start">
                     <img className="w-48 h-48 rounded-full mx-auto lg:mx-0 lg:mr-8" src={biodata.image} alt="Profile" />
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
                             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                            
                           >
                            Edit
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
        </div>
    );
};

export default UserBiodata;
