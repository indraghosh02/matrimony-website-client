// FilterBiodata.jsx
import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";

import CardForm from './CardForm';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const FilterBiodata = () => {
    const axiosSecure = useAxiosPublic();
    const [filters, setFilters] = useState({
        ageMin: '',
        ageMax: '',
        type: '',
        division: ''
    });

    // const { data, refetch } = useQuery({
    //     queryKey: ['filteredBiodata', filters],
    //     queryFn: async () => {
    //         const params = new URLSearchParams(filters).toString();
    //         const { data } = await axiosSecure.get(`/biodata/filter?${params}`);
    //         return data;
    //     },
    //     enabled: false // Disable automatic refetch on mount
    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFilters(prev => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     refetch();
    // };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h2 className="text-3xl font-bold mb-4 text-red-600 font-serif">Filter Biodatas</h2>
            <form 
            // onSubmit={handleSubmit}
             className="mb-6">
                <div>
                    <label>Age Range:</label>
                    <input
                        type="number"
                        name="ageMin"
                        // value={filters.ageMin}
                        // onChange={handleInputChange}
                        placeholder="Min Age"
                        className="border p-2 mx-2"
                    />
                    <input
                        type="number"
                        name="ageMax"
                        // value={filters.ageMax}
                        // onChange={handleInputChange}
                        placeholder="Max Age"
                        className="border p-2 mx-2"
                    />
                </div>
                <div>
                    <label>Type:</label>
                    <select name="type"
                    //  value={filters.type} onChange={handleInputChange}
                      className="border p-2 mx-2">
                        <option value="">Select Type</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Division:</label>
                    <select name="division" 
                    // value={filters.division} onChange={handleInputChange} 
                    className="border p-2 mx-2">
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                {/* <button 
                type="submit" 
                className="btn bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Filter</button> */}
                <h2 className='btn bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-20'>Filter</h2>
            </form>
            {/* <div className="grid grid-cols-3 gap-10">
                {data && data.map(biodata => (
                    <CardForm key={biodata._id} biodata={biodata} />
                ))}
            </div> */}
        </div>
    );
};

export default FilterBiodata;
