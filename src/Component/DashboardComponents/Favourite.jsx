import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Favourite = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user from context
  const queryClient = useQueryClient();

  const fetchFavourites = async () => {
    const { data } = await axios.get(`http://localhost:5000/favourites/${user.email}`);
    return data;
  };

  const { data: favourites, refetch } = useQuery({
    queryKey: ['favourites', user.email],
    queryFn: fetchFavourites,
  });

  const handleDelete = _id => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/favourite/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your favourite has been deleted.",
                icon: "success"
              });
              // Update the state to remove the deleted item
              queryClient.setQueryData(['favourites', user.email], (oldData) =>
                oldData.filter(fav => fav._id !== _id)
              );
            }
          });
      }
    });
  };

  return (
    <div className='flex p-10'>
      <div className='items-center justify-center p-6'>
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
                    <button onClick={() => handleDelete(fav._id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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



















// where dlt item not vanished

// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios';

// import CardForm from "../../Pages/Biodata/CardForm";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import BiodataTable from "./BiodataTable";
// import Swal from "sweetalert2";

// const Favourite = () => {
//   const { user } = useContext(AuthContext); // Get the logged-in user from context
//   const [fav, setFev] = useState();

//   const fetchFavourites = async () => {
//     const { data } = await axios.get(`http://localhost:5000/favourites/${user.email}`);
//     return data;
//   };

//   const { data: favourites } = useQuery({
//     queryKey: ['favourites', user.email],
//     queryFn: fetchFavourites,
//   });

//   const handleDelete = _id => {
//     console.log(_id);

//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {


//             fetch(`http://localhost:5000/favourite/${_id}`, {
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if(data.deletedCount > 0){
//                     Swal.fire({
//                     title: "Deleted!",
//                     text: "Your coffee has been deleted.",
//                     icon: "success"
//                     });
//                     const remaining = fav.filter(cof => cof._id !== _id);
//                     setFev(remaining)
                  
//                 }
//             })
//         }
//       });

// }

//   return (
//     <div className='flex p-10'>
//       <div className=' items-center justify-center p-6'>
//         <h2 className='text-3xl font-bold mb-4 text-red-600 font-serif'>My Favourite Biodatas</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-red-600 text-white">
//               <tr>
//                 <th className="w-1/6 py-2">Name</th>
//                 <th className="w-1/6 py-2">Biodata ID</th>
//                 <th className="w-1/6 py-2">Permanent Address</th>
//                 <th className="w-1/6 py-2">Occupation</th>
//                 <th className="w-1/6 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {favourites && favourites.map(fav => (
//                 <tr key={fav._id} className="text-center border-b">
//                   <td className="py-2">{fav.name}</td>
//                   <td className="py-2">{fav.biodataId}</td>
//                   <td className="py-2">{fav.permanentDivision}</td>
//                   <td className="py-2">{fav.occupation}</td>
//                   <td className="py-2">
//                     <button onClick={() => handleDelete(fav._id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Favourite;
