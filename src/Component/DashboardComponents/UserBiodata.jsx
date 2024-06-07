import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UserBiodata = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState(null);
 
    const navigate = useNavigate();

    

    const handleUpdateBiodata = async (event) => {
      event.preventDefault();
      const form = event.target;
      const type = form.type.value;
      const name = form.name.value;
      const imageFile = form.image.value; 
      const date = form.date.value;
      const height = form.height.value;
      const weight = form.weight.value;
      const age = form.age.value;
      const occupation = form.occupation.value;
      const race = form.race.value;
      const fName = form.father_name.value;
      const mName = form.mother_name.value;
      const permanentDivision = form.permanent.value;
      const presentDivision = form.present.value;
      const partnerAge = form.expected_partner_age.value;
      const partnerHeight = form.expected_partner_height.value;
      const partnerWeight = form.expected_partner_weight.value;
      const email = form.email.value;
      const number = form.number.value;
  
      let image = '';
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
  
        const response = await fetch(image_hosting_api, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        image = data.data.url;
      }
  
      const updatedBiodata = {
        type,
        name,
        image,
        date,
        height,
        weight,
        age,
        occupation,
        race,
        fName,
        mName,
        permanentDivision,
        presentDivision,
        partnerAge,
        partnerHeight,
        partnerWeight,
        email,
        number,
      };
      console.log(updatedBiodata);
  
      // send data to server
      fetch(`https://matrimony-server-sable.vercel.app/biodata/${biodata._id}`, {
          method: 'PUT',
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(updatedBiodata)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
              // show success popup
             
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `  Biodata updated successfully`,
                  showConfirmButton: false,
                  timer: 1500
                })
                .then(() => {
                  // Navigate to "/dashboard/view_biodata" route
                  navigate("/dashboard/view_biodata")
              });
               
          }
      })
      
    };
  
 
    const divisions = ["Dhaka", "Chattagram", "Rangpur", "Barisal", "Khulna", "Maymansign", "Sylhet"];

    useEffect(() => {
        if (user) {
            fetchUserBiodata(user.email);
        }
    }, [user]);

    const fetchUserBiodata = async (email) => {
        try {
            const response = await fetch(`https://matrimony-server-sable.vercel.app/biodata/user/${email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user biodata');
            }
            const userBiodata = await response.json();
            setBiodata(userBiodata);
        } catch (error) {
            console.error('Error fetching user biodata:', error);
        }
    };

    return (
        <div>
            
            {biodata ? (

            <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
 
            <div className="w-full max-w-3xl p-8 space-y-6 bg-white rounded-lg shadow-md">
              <h2 className="text-4xl font-serif font-bold text-center text-blue-600">Edit Your Biodata</h2>
              <form onSubmit={handleUpdateBiodata}  className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Biodata Type</label>
                    <select
                      id="type"
                      name="type"
                     
                      required
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                     <option defaultValue={biodata.type}>{biodata.type}</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={biodata.name}
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Profile Image
                    </label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      defaultValue={biodata.image}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                    {/* <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" className="mt-4 h-32 w-32 object-cover" />
              ) : (
                <img src={biodata.image} alt="Current" className="mt-4 h-32 w-32 object-cover" />
              )} */}
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      defaultValue={biodata.date}
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                      Height
                    </label>
                    <select
                      id="height"
                      name="height"
                     
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                     <option defaultValue={biodata.height}>{biodata.height}</option>
                      <option value="4'">4'</option>
                      <option value="5'">4.5'</option>
                      <option value="6'">5'</option>
                      <option value="7'">5.5'</option>
                      <option value="7'">6'</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                      Weight
                    </label>
                    <select
                      id="weight"
                      name="weight"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.weight}>{biodata.weight}</option>
                      <option value="50kg">40kg</option>
                      <option value="60kg">50kg</option>
                      <option value="70kg">60kg</option>
                      <option value="80kg">70kg</option>
                      <option value="80kg">80kg</option>
                      <option value="80kg">80kg+</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      defaultValue={biodata.age}
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                      Occupation
                    </label>
                    <select
                      id="occupation"
                      name="occupation"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.occupation}>{biodata.occupation}</option>
                      <option value="Student">Student</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Businessman">Businessman</option>
                      <option value="ServiceHolder">Service Holder</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="race" className="block text-sm font-medium text-gray-700">
                      Race
                    </label>
                    <select
                      id="race"
                      name="race"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.race}>{biodata.race}</option>
                      <option value="Asian">Asian</option>
                      <option value="African">African</option>
                      <option value="Caucasian">Caucasian</option>
                      <option value="Hispanic">Hispanic</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="father_name" className="block text-sm font-medium text-gray-700">
                      Father's Name
                    </label>
                    <input
                      type="text"
                      id="father_name"
                      name="father_name"
                      defaultValue={biodata.fName}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="mother_name" className="block text-sm font-medium text-gray-700">
                      Mother's Name
                    </label>
                    <input
                      type="text"
                      id="mother_name"
                      name="mother_name"
                      defaultValue={biodata.mName}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="permanent" className="block text-sm font-medium text-gray-700">
                      Permanent Division
                    </label>
                    <select
                      id="permanent"
                      name="permanent"
                      
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.permanentDivision}>{biodata.permanentDivision}</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>{division}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="present" className="block text-sm font-medium text-gray-700">
                      Present Division
                    </label>
                    <select
                      id="present"
                      name="present"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.presentDivision}>{biodata.presentDivision}</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>{division}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expected_partner_age" className="block text-sm font-medium text-gray-700">
                      Expected Partner Age
                    </label>
                    <input
                      type="number"
                      id="expected_partner_age"
                      name="expected_partner_age"
                      defaultValue={biodata.partnerAge}
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="expected_partner_height" className="block text-sm font-medium text-gray-700">
                      Expected Partner Height
                    </label>
                    <select
                      id="expected_partner_height"
                      name="expected_partner_height"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      
                      <option defaultValue={biodata.partnerHeight}>{biodata.partnerHeight}</option>
                      <option value="4'">4'</option>
                      <option value="5'">4.5'</option>
                      <option value="6'">5'</option>
                      <option value="6'">5.5'</option>
                      <option value="7'">6'</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expected_partner_weight" className="block text-sm font-medium text-gray-700">
                      Expected Partner Weight
                    </label>
                    <select
                      id="expected_partner_weight"
                      name="expected_partner_weight"
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option defaultValue={biodata.partnerWeight}>{biodata.partnerWeight}</option>
                      <option value="50kg">45kg</option>
                      <option value="60kg">50kg</option>
                      <option value="60kg">60kg</option>
                      <option value="70kg">70kg</option>
                      <option value="80kg">80kg</option>
                      <option value="80kg">80kg+</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      readOnly
                      className="w-full px-3 py-2 mt-1 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      defaultValue={biodata.number}
                      required
                      className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    Edit Biodata
                  </button>
                
                </div>
              </form>
            </div>
          </div>
            ) : (
                <p>No biodata found for the user.</p>
            )}
        </div>
    );
};

export default UserBiodata;
