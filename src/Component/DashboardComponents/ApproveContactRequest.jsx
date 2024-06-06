import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApproveContactRequest = () => {
    const [contactRequests, setContactRequests] = useState([]);

    useEffect(() => {
        const fetchContactRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5000/contact-requests-info');
                setContactRequests(response.data);
            } catch (error) {
                console.error('Error fetching contact requests:', error);
            }
        };

        fetchContactRequests();
    }, []);

    return (


        <>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
           
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
                         Biodata ID
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-blue-600 text-white border-b border-gray-200 text-left text-sm uppercase font-bold'
                      >
                      Approved Contact Request
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
  <button className='btn bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600'>
    Approve Request
  </button>
</td>

</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>



        
        // <div>
        //     <h2>Contact Requests</h2>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Biodata ID</th>
        //                 <th>Name</th>
        //                 <th>Email</th>
        //                 <th>Number</th>
        //                 <th>Price</th>
        //                 <th>Status</th>
        //                 <th>Payment Status</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {contactRequests.map(request => (
        //                 <tr key={request._id}>
        //                     <td>{request.biodataId}</td>
        //                     <td>{request.name}</td>
        //                     <td>{request.userEmail}</td>
        //                     <td>{request.number}</td>
        //                     <td>{request.price}</td>
        //                     <td>{request.status}</td>
        //                     <td>{request.paymentStatus}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    );
};

export default ApproveContactRequest;
