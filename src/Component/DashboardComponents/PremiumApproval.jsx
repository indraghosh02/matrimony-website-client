import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const PremiumApproval = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/premium-requests');
            setRequests(data);
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    const approveRequest = async (requestId) => {
        try {
            const { data } = await axios.patch(`http://localhost:5000/premium-requests/approve/${requestId}`);
            if (data.modifiedCount > 0) {
                toast.success('Biodata has been made premium');
                fetchRequests();
            } else {
                toast.error('Failed to make biodata premium');
            }
        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    };

    return (
        <div>
            <h2 className='font-extrabold font-serif text-2xl text-center text-blue-600'>Premium Approval Requests</h2>


            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className="">
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                      Biodata Id
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                    >
                     Action
                    </th>

                  </tr>
                </thead>
                 <tbody>

                 {requests.map((request) => (
                        <tr key={request._id}>
                           <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{request.biodata.name}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{request.email}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{request.biodata.biodataId}</p>
                        </td>
                      
                        {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <button onClick={() => approveRequest(request._id)}  className='btn bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600'>
                            Make Premium
                            </button>
                        </td> */}
                           <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        {request.status === "Approved" ? (
                                            <p className='text-green-600'>Approved</p>
                                        ) : (
                                            <button onClick={() => approveRequest(request._id)} className='btn bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                                                Make Premium
                                            </button>
                                        )}
                                    </td>
                        </tr>
                    ))}

                 <tr>
                        
                       
                        </tr>


                 </tbody>
              </table>
            </div>
          </div>



            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Biodata ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request._id}>
                            <td>{request.biodata.name}</td>
                            <td>{request.email}</td>
                            <td>{request.biodata.biodataId}</td>
                            <td>
                                <button onClick={() => approveRequest(request._id)}>
                                    Make Premium
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default PremiumApproval;
