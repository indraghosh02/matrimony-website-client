import React from 'react';
import Swal from 'sweetalert2';

const BiodataTable = ({ biodata }) => {
console.log(biodata);
   
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
                    if(data.deletedCount > 0){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                        });
                      
                    }
                })
            }
          });

    }
  return (
 
        
            <tr key={biodata._id} className="text-center border-b">
              <td className="py-2">{biodata.name}</td>
              <td className="py-2">{biodata.biodataId}</td>
              <td className="py-2">{biodata.permanentDivision}</td>
              <td className="py-2">{biodata.occupation}</td>
              <td className="py-2">
                <button onClick={() => handleDelete(biodata._id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                 
                >
                  Delete
                </button>
              </td>
            </tr>
          
      
  );
};

export default BiodataTable;
