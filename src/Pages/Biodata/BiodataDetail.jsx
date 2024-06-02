import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import CardForm from './CardForm';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
 // Assume you have this context

const BiodataDetail = () => {
  const { id } = useParams();
  const [biodata, setBiodata] = useState(null);
  const [allBiodata, setAllBiodata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext); // Get the logged-in user from context

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const biodataResponse = await axios.get(`http://localhost:5000/biodata/${id}`);
        const allBiodataResponse = await axios.get('http://localhost:5000/biodata');
        setBiodata(biodataResponse.data);
        setAllBiodata(allBiodataResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBiodata();
  }, [id]);

  const handleAddToFavourites = async () => {
    try {
      const response = await axios.post('http://localhost:5000/favourite', {
        favouriteData: biodata,
        userEmail: user.email, // Use the logged-in user's email
      });
      console.log(response.data);
      toast('Added to favourites successfully!');
    } catch (error) {
      console.error(error);
      toast('Failed to add to favourites.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filter similar biodata based on gender and exclude the current biodata
  const similarBiodata = allBiodata
    .filter(b => b.type === biodata.type && b._id !== biodata._id)
    .slice(0, 3);

  return (
    <div className="p-6">
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
                    onClick={handleAddToFavourites}
                  >
                    Add to Favourites
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    Request for Contact Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 ml-10 mr-10">
        <h3 className="font-bold mb-4 text-center text-4xl font-serif">Some Similar Biodatas</h3>
        <div className="grid lg:grid-cols-3 gap-10">
          {similarBiodata.map(b => (
            <CardForm key={b._id} biodata={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetail;
