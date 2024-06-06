// BiodataDetail.js
import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import usePremium from '../../hooks/usePremium';

const BiodataDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [biodata, setBiodata] = useState(null);
  const [allBiodata, setAllBiodata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const [isPremium, isLoading ] = usePremium()

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
        userEmail: user.email,
      });
      console.log(response.data);
      toast('Added to favourites successfully!');
    } catch (error) {
      console.error('Error adding to favourites:', error);
      toast('Failed to add to favourites.');
    }
  };

  // const handleRequestContact = () => {
  //   navigate(`/checkout/${biodata.biodataId}`);
  // };
  const handleRequestContact = () => {
    const url = `/checkout/${biodata.biodataId}?name=${encodeURIComponent(biodata.name)}&number=${encodeURIComponent(biodata.number)}`;
    navigate(url);
  };
  

  // const handleRequestContact = () => {
  //   navigate( `/checkout/${biodataId}?name=${encodeURIComponent(name)}&number=${encodeURIComponent(number)}`);
  // };

  // const handleRequestContact = () => {
  //   navigate(`/checkout/${biodata.biodataId}`, {
  //     state: {
  //       name: biodata.name,
  //       number: biodata.number
  //     }
  //   });
  // };
  

  const similarBiodata = allBiodata.filter(b => b._id !== id && b.type === biodata.type).slice(0, 3);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-full md:w-1/3 h-auto object-cover"
            src={biodata.image}
            alt="Profile"
          />
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-2">{biodata.name}</h2>
            <p className="text-gray-700 mb-4">{biodata.type}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>Date:</strong> {biodata.date}</p>
                <p><strong>Height:</strong> {biodata.height}</p>
                <p><strong>Weight:</strong> {biodata.weight}</p>
                <p><strong>Age:</strong> {biodata.age}</p>
              </div>
              <div>
                <p><strong>Occupation:</strong> {biodata.occupation}</p>
                <p><strong>Race:</strong> {biodata.race}</p>
                <p><strong>Father's Name:</strong> {biodata.fName}</p>
                <p><strong>Mother's Name:</strong> {biodata.mName}</p>
              </div>
              <div>
                <p><strong>Permanent Division:</strong> {biodata.permanentDivision}</p>
                <p><strong>Present Division:</strong> {biodata.presentDivision}</p>
              </div>
              <div>
                <p><strong>Partner's Age:</strong> {biodata.partnerAge}</p>
                <p><strong>Partner's Height:</strong> {biodata.partnerHeight}</p>
                <p><strong>Partner's Weight:</strong> {biodata.partnerWeight}</p>

                {isPremium  &&   <div>
                <p><strong>Email:</strong> {biodata.email}</p>
                <p><strong>Phone Number:</strong> {biodata.number}</p>
                </div>
                 }
              
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-16">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                onClick={handleAddToFavourites}
              >
                Add to Favourites
              </button>
              {
                !isPremium  &&  <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                onClick={handleRequestContact}
              >
                Request for Contact Information
              </button>
              }
             
            </div>
          </div>
        </div>
      </div>
      {similarBiodata.length > 0 && (
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-4 text-center text-white font-serif">Similar Biodata</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarBiodata.map(b => (
              <Link key={b._id} to={`/biodata/${b._id}`} className="bg-white rounded-lg shadow-lg p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
                <img className="w-32 h-32 rounded-full mx-auto" src={b.image} alt="Profile" />
                <h4 className="text-xl font-bold text-center mt-4">{b.name}</h4>
                <p className="text-center">{b.type}</p>
                <p className="text-center">{b.date}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BiodataDetail;
