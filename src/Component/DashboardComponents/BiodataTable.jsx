import React from 'react';
import Swal from 'sweetalert2';

const BiodataTable = ({ biodata }) => {
console.log(biodata);
   
  
  return (
 
        
            <tr key={biodata._id} className="text-center border-b">
              <td className="py-2">{biodata.name}</td>
              <td className="py-2">{biodata.biodataId}</td>
              <td className="py-2">{biodata.permanentDivision}</td>
              <td className="py-2">{biodata.occupation}</td>
              <td className="py-2">
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                 
                >
                  Delete
                </button>
              </td>
            </tr>
          
      
  );
};

export default BiodataTable;
