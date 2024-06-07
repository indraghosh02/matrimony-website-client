import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import usePremium from '../../hooks/usePremium';

const PremiumBiodataDetail = () => {
  const { id } = useParams();
  const [biodata, setBiodata] = useState(null);
  const [isPremium, isLoading ] = usePremium()
  useEffect(() => {
    const fetchBiodataDetails = async () => {
      try {
        const response = await axios.get(`https://matrimony-server-sable.vercel.app/premium-requests/${id}`);
        setBiodata(response.data);
      } catch (error) {
        console.error('Error fetching premium biodata details:', error);
      }
    };

    fetchBiodataDetails();
  }, [id]);

  if (!biodata) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="container mx-auto mt-8">
    //   <h2 className="text-3xl font-semibold mb-4">Premium Biodata Details</h2>
    //   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //     <div className="mb-4">
    //       <img src={biodata.biodata.image} alt="Profile" className="w-full h-auto" />
    //     </div>
    //     <div className="mb-4">
    //       <p><strong>Biodata Id:</strong> {biodata.biodata.biodataId}</p>
    //       <p><strong>Biodata Type:</strong> {biodata.biodata.type}</p>
    //       <p><strong>Permanent Division:</strong> {biodata.biodata.permanentDivision}</p>
    //       <p><strong>Age:</strong> {biodata.biodata.age}</p>
    //       <p><strong>Occupation:</strong> {biodata.occupation}</p>
    //       {/* Add more biodata details here as needed */}
    //     </div>
    //   </div>
    // </div>
    

    <div className="container mx-auto p-6">
        <h2 className='text-center text-4xl font-bold font-serif  mb-10'> Premium BioData Details</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/3 h-auto object-cover"
            src={biodata.biodata.image}
            alt="Profile"
          />
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-2">{biodata.biodata.name} </h2>
            <p className="text-gray-700 mb-4">{biodata.biodata.type}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>Date:</strong> {biodata.biodata.date}</p>
                <p><strong>Height:</strong> {biodata.biodata.height}</p>
                <p><strong>Weight:</strong> {biodata.biodata.weight}</p>
                <p><strong>Age:</strong> {biodata.biodata.age}</p>
              </div>
              <div>
                <p><strong>Occupation:</strong> {biodata.biodata.occupation}</p>
                <p><strong>Race:</strong> {biodata.biodata.race}</p>
                <p><strong>Father's Name:</strong> {biodata.biodata.fName}</p>
                <p><strong>Mother's Name:</strong> {biodata.biodata.mName}</p>
              </div>
              <div>
                <p><strong>Permanent Division:</strong> {biodata.biodata.permanentDivision}</p>
                <p><strong>Present Division:</strong> {biodata.biodata.presentDivision}</p>
              </div>
              <div>
                <p><strong>Partner's Age:</strong> {biodata.biodata.partnerAge}</p>
                <p><strong>Partner's Height:</strong> {biodata.biodata.partnerHeight}</p>
                <p><strong>Partner's Weight:</strong> {biodata.biodata.partnerWeight}</p>
                {
                  isPremium && 
                  <div>
                  <p><strong>Email:</strong> {biodata.email}</p>
                  <p><strong>Phone Number:</strong> {biodata.biodata.number}</p>
                  </div>
                
                }
               
              </div>
            </div>
            <div className="mt-6 flex justify-center">
            
            
            </div>
          </div>
        </div>
      </div>
     
    </div>






  );
};

export default PremiumBiodataDetail;
