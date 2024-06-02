import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

import CardForm from "../../Pages/Biodata/CardForm";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BiodataTable from "./BiodataTable";

const Favourite = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user from context

  const fetchFavourites = async () => {
    const { data } = await axios.get(`http://localhost:5000/favourites/${user.email}`);
    return data;
  };

  const { data: favourites } = useQuery({
    queryKey: ['favourites', user.email],
    queryFn: fetchFavourites,
  });

  return (
    <div className='flex p-10'>
      <div className=' items-center justify-center p-6'>
        <h2 className='text-3xl font-bold mb-4 text-red-600 font-serif'>My Favourite Biodatas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="w-1/6 py-2">Name</th>
                <th className="w-1/6 py-2">Biodata ID</th>
                <th className="w-1/6 py-2">Permanent Address</th>
                <th className="w-1/6 py-2">Occupation</th>
                <th className="w-1/6 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favourites && favourites.map(fav => (
                <tr key={fav._id} className="text-center border-b">
                  <td className="py-2">{fav.name}</td>
                  <td className="py-2">{fav.biodataId}</td>
                  <td className="py-2">{fav.permanentDivision}</td>
                  <td className="py-2">{fav.occupation}</td>
                  <td className="py-2">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
