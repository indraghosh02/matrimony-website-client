// // Update MyContactRequests.js to fetch and display contact requests with associated biodata information
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyContactRequests = () => {
//   const [contactRequests, setContactRequests] = useState([]);

//   useEffect(() => {
//     const fetchContactRequests = async () => {
//       try {
//         const response = await axios.get('https://matrimony-server-sable.vercel.app/contact-requests');
//         setContactRequests(response.data);
//       } catch (error) {
//         console.error('Error fetching contact requests:', error);
//       }
//     };
//     fetchContactRequests();
//   }, []);

//   return (
//     <div>
//       <h1>Contact Requests</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Biodata ID</th>
//             <th>Status</th>
//             <th>Mobile Number</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contactRequests.map(request => (
//             <tr key={request._id}>
//               {/* Display contact request details and associated biodata information */}
//               <td>{request.name}</td>
//               <td>{request.biodataId}</td>
//               <td>{request.status}</td>
//               <td>{request.mobileNumber}</td>
//               <td>{request.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyContactRequests;
