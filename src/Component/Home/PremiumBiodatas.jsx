import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PremiumBiodatas = () => {
    const [premiumBiodatas, setPremiumBiodatas] = useState([]);

    useEffect(() => {
        fetchPremiumBiodatas();
    }, []);

    const fetchPremiumBiodatas = async () => {
        try {
            const response = await axios.get('http://localhost:5000/premium-requests');
            const approvedBiodatas = response.data.filter(request => request.status === "Approved");
            setPremiumBiodatas(approvedBiodatas);
        } catch (error) {
            console.error('Error fetching premium biodatas:', error);
        }
    };

    return (
                <div className='mt-14'>
                <h2 className='text-center font-bold text-4xl text-red-600 font-serif mb-3'>Premium Biodatas</h2>
                <p className='text-center mb-8 '> Unlock premium profiles—curated, diverse, and ready for discovery. From seasoned professionals to promising talents, <br /> find your perfect match with detailed insights. Explore now!</p>
                        
            <div className=' grid md:grid-cols-3'>
                {
                    premiumBiodatas.map( (biodata) => (

        <div key={biodata._id} className="rounded-md shadow-md sm:w-96 bg-slate-50 dark:text-gray-800 mt-8 ml-28 mr-28 mb-10">
      
        <img src={biodata.biodata.image} alt="" className="object-cover object-center mt-4 w-full h-72 dark:bg-gray-500" />
        <div className="p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    
                </div>
            </div>
            <div className="flex flex-wrap items-center pt-3 pb-1">
                <div className="flex items-center space-x-2">
                </div>
            </div>
            <div className="space-y-3">
            <div className="px-6 py-4">
                        
                        <p><strong>Biodata Id:</strong> {biodata.biodata.biodataId}</p>
                        <p><strong>Biodata Type:</strong> {biodata.biodata.type}</p>
                        <p><strong>Permanent Division:</strong> {biodata.biodata.permanentDivision}</p>
                        <p><strong>Age:</strong> {biodata.biodata.age}</p>
                        <p><strong>Occupation:</strong> {biodata.biodata.occupation}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View Profile
                        </button>
                    </div>
                
            </div>
        </div>
    </div>
                    )

                    )
                }
            </div>
                </div>




       
    );
};

export default PremiumBiodatas;
