// import BiodataForm from "../../Component/DashboardComponents/BiodataForm";


// const CreateEditBiodat = () => {
//     return (
//         <div>
//             <h2 className="text-center text-4xl text-blue-700 font-bold">Create a Biodata</h2>
//             <BiodataForm></BiodataForm>
//         </div>
//     );
// };

// export default CreateEditBiodat;


import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import BiodataForm from '../../Component/DashboardComponents/BiodataForm';
import UserBiodata from '../../Component/DashboardComponents/UserBiodata';

const CreateEditBiodat = () => {
    const { user } = useContext(AuthContext);
    const [existingBiodata, setExistingBiodata] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/biodata/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setExistingBiodata(data);
            })
            .catch(error => {
                console.error('Error fetching existing biodata:', error);
                
            });
    }, [user.email]);

    return (
        <div>
            
            {existingBiodata ? (
                // <h2 className="text-center text-2xl text-blue-700 font-bold">You have already created a biodata</h2>
                <UserBiodata></UserBiodata>
            ) : (
                <BiodataForm />
            )}
        </div>
    );
};

export default CreateEditBiodat;
