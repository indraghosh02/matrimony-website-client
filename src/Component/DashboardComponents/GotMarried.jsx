

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const GotMarried = () => {
 
  //const navigate = useNavigate();

  const handleAddMarriage = async (event) => {
    event.preventDefault();
    const form = event.target;
    const selfId = form.self_id.value;
    const partnerId = form.partner_id.value;
    const imageFile = form.image.files[0]; // Get the file object
    const date = form.date.value;
   
    const story = form.story.value;
    const review = form.review.value;


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

    const newMarriage = {
   
      selfId,
      partnerId,
      image,
      date,
      story,
      review
     
     
    };
    console.log(newMarriage);

    // send data to server
    fetch('https://matrimony-server-sable.vercel.app/marriage', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newMarriage)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            // show success popup
           
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `  Marriage Info added.`,
                showConfirmButton: false,
                timer: 1500
              })
            //   .then(() => {
            //     // Navigate to "/dashboard/view_biodata" route
            //     navigate("/")
            // });
             
        }
    })
    
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
 
      <div className="w-full max-w-3xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-serif font-bold text-center text-blue-600">Fill-up Your Marriage Information</h2>
        <form onSubmit={handleAddMarriage} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          
            <div>
              <label htmlFor="self_id" className="block text-sm font-medium text-gray-700">
              Self Biodata id
              </label>
              <input
                type="number"
                id="self_id"
                name="self_id"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="partner_id" className="block text-sm font-medium text-gray-700">
              Partner's Biodata id
              </label>
              <input
                type="number"
                id="partner_id"
                name="partner_id"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                 Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Marraige Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
        
          <div className="md:grid-cols-2">
            <div>
              <label htmlFor="story" className="block text-sm font-medium text-gray-700">
                Success Story
              </label>
              <input
                type="text"
                id="story"
                name="story"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
           
          </div>
          <div className="grid grid-cols-1 gap-4 ">
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">
              Review
              </label>
              <select
              type="number"
                id="review"
                name="review"
                required
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Select number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
         
          </div>
     
    
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Submit
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default GotMarried;



