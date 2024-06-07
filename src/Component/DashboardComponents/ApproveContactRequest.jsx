import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApproveContactRequest = () => {
    const [contactRequests, setContactRequests] = useState([]);

    useEffect(() => {
        const fetchContactRequests = async () => {
            try {
                const response = await axios.get('https://matrimony-server-sable.vercel.app/contact-requests-info');
                setContactRequests(response.data);
            } catch (error) {
                console.error('Error fetching contact requests:', error);
            }
        };

        fetchContactRequests();
    }, []);

    const handleApprove = async (id) => {
        try {
            await axios.patch(`https://matrimony-server-sable.vercel.app/contact-requests-info/${id}`, { status: 'Approved' });
            setContactRequests(prevRequests =>
                prevRequests.map(request =>
                    request._id === id ? { ...request, status: 'Approved' } : request
                )
            );
        } catch (error) {
            console.error('Error approving contact request:', error);
        }
    };

    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-8'>
            <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center font-serif">Approve Contact Requests</h2>
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
                                      Biodata Email
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                                    >
                                        Biodata ID
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                                    >
                                        Requester Email
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                                    >
                                        Approve Contact Request
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactRequests.map(request => (
                                    <tr key={request._id}>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{request.name}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{request.userEmail}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{request.biodataId}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{request.email}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{request.status}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            {request.status === 'Pending' && (
                                                <button
                                                    className='btn bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600'
                                                    onClick={() => handleApprove(request._id)}
                                                >
                                                    Approve Request
                                                </button>
                                            )}
                                               {request.status === 'Approved' && (
                                               <img src="https://i.ibb.co/q5xLDbx/icons8-tick-mark-48.png" alt="" />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApproveContactRequest;
