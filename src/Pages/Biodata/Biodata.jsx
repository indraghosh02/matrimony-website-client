// Biodata.jsx
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CardForm from "./CardForm";
import FilterBiodata from './FilterBiodata';

const Biodata = () => {
    const axiosSecure = useAxiosPublic();
    const { data } = useQuery({
        queryKey: ['biodata'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/biodata');
            return data;
        }
    });

    return (
    
       <div className='flex p-10' >

        <div className='w-1/2'>
          
        </div>
        {/* <div>
        <h2 className='text-3xl font-bold text-center '> All Biodatas </h2>
        <div className='grid grid-cols-3 gap-4 w-1/2'>
           
           {data && data.map(biodata => (
               <CardForm key={biodata._id} biodata={biodata} />
           ))}
       </div>
        </div> */}
        <div className='flex flex-col items-center justify-center p-6'>
            <h2 className='text-3xl font-bold mb-4 text-red-600 font-serif'>All Biodatas</h2>
            <div className='grid grid-cols-3 gap-10'>
                {data && data.map(biodata => (
                    <CardForm key={biodata._id} biodata={biodata} />
                ))}
            </div>
        </div>
       </div>
    );
};

export default Biodata;
