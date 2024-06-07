import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PremiumBiodatas = () => {
  const [premiumBiodatas, setPremiumBiodatas] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // State to keep track of sorting order
  const navigate = useNavigate();

  useEffect(() => {
    fetchPremiumBiodatas();
  }, []);

  const fetchPremiumBiodatas = async () => {
    try {
      const response = await axios.get('https://matrimony-server-sable.vercel.app/premium-requests');
      const approvedBiodatas = response.data.filter(request => request.status === "Approved");
      setPremiumBiodatas(approvedBiodatas);
    } catch (error) {
      console.error('Error fetching premium biodatas:', error);
    }
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleViewDetails = (biodataId) => {
    navigate(`/premium-requests/${biodataId}`);
  };

  // Sort the biodata array based on age
  const sortedBiodatas = [...premiumBiodatas].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.biodata.age - b.biodata.age;
    } else {
      return b.biodata.age - a.biodata.age;
    }
  });

  return (
    <div className='mt-14'>
      <h2 className='text-center font-bold text-4xl text-red-600 font-serif mb-3'>Premium Biodatas</h2>
      <p className='text-center mb-8'> Unlock premium profiles—curated, diverse, and ready for discovery. From seasoned professionals to promising talents, <br /> find your perfect match with detailed insights. Explore now!</p>
      
      <div className="text-center mb-8">
        <label htmlFor="sortOrder" className="mr-2">Sort by Age:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange} className="p-2 border rounded">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className='grid md:grid-cols-3 lg:mr-28'>
        {sortedBiodatas.map((biodata) => (
          <div key={biodata._id} className="rounded-md shadow-md sm:w-96 bg-slate-50 dark:text-gray-800 mt-8 ml-28 mr-28 mb-10">
            <img src={biodata.biodata.image} alt="" className="object-cover object-center mt-4 w-full h-72 dark:bg-gray-500" />
            <div className="p-3">
              <div className="space-y-3">
                <div className="px-6 py-4">
                  <p><strong>Biodata Id:</strong> {biodata.biodata.biodataId}</p>
                  <p><strong>Biodata Type:</strong> {biodata.biodata.type}</p>
                  <p><strong>Permanent Division:</strong> {biodata.biodata.permanentDivision}</p>
                  <p><strong>Age:</strong> {biodata.biodata.age}</p>
                  <p><strong>Occupation:</strong> {biodata.biodata.occupation}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleViewDetails(biodata._id)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumBiodatas;
