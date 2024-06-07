import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyContactRequest = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user from context
  const queryClient = useQueryClient();

  const fetchContactRequest = async () => {
    const { data } = await axios.get(`https://matrimony-server-sable.vercel.app/contact-requests-info/${user.email}`);
    return data;
  };

  const { data: contacts, refetch } = useQuery({
    queryKey: ['contacts', user.email],
    queryFn: fetchContactRequest,
  });

  const handleDelete = (id) => {
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
        axios.delete(`https://matrimony-server-sable.vercel.app/contact-requests-info/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your contact request has been deleted.",
              icon: "success"
            });
            refetch(); // Refresh the data after deletion
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting your contact request.",
              icon: "error"
            });
            console.error("There was an error deleting the contact request:", error);
          });
      }
    });
  };

  return (
    <div className="flex p-10">
      <div className="items-center justify-center p-6 w-full">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center font-serif">My Contact Requests</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="w-1/6 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                <th className="w-1/6 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Biodata ID</th>
                <th className="w-1/6 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="w-1/6 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Mobile No</th>
                <th className="w-1/6 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="w-1/6 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts && contacts.map(fav => (
                <tr key={fav._id} className="hover:bg-gray-100">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{fav.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{fav.biodataId}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{fav.status}</td>
                  {fav.status === "Approved" ? (
                    <>
                      <td className="py-4 px-6 text-sm text-gray-500">{fav.number}</td>
                      <td className="py-4 px-6 text-sm text-gray-500">{fav.email}</td>
                    </>
                  ) : (
                    <>
                      <td className="py-4 px-6 text-sm text-red-600">Not Eligible</td>
                      <td className="py-4 px-6 text-sm text-red-600">Not Eligible</td>
                    </>
                  )}
                  <td className="py-2">
                    <button
                      onClick={() => handleDelete(fav._id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
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

export default MyContactRequest;
