import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CardForm from "./CardForm";

const FilterBiodata = () => {
    const axiosSecure = useAxiosPublic();
    const [filters, setFilters] = useState({
        ageRange: "", // Initial age range filter
        biodataType: "", // Initial biodata type filter
        division: "" // Initial division filter
    });

    const { data } = useQuery({
        queryKey: ['biodata', filters], // Include filters in queryKey to trigger re-fetch on filter change
        queryFn: async () => {
            const { data } = await axiosSecure.get('/biodata', { params: filters }); // Pass filters as query parameters
            return data;
        }
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    return (
        <div className='flex p-10'>
            <div className='w-1/3'>
              
            </div>
            <div className='flex flex-col items-center justify-center p-6'>
                <h2 className='text-3xl font-bold mb-4 text-red-600 font-serif'>All Biodatas</h2>
                {/* Filter section */}
                <div className="flex justify-center mb-4">
                    {/* Age range filter */}
                    <input type="number" value={filters.ageRange.min} onChange={e => handleFilterChange('ageRange', { ...filters.ageRange, min: parseInt(e.target.value) })} />
                    <input type="number" value={filters.ageRange.max} onChange={e => handleFilterChange('ageRange', { ...filters.ageRange, max: parseInt(e.target.value) })} />
                    {/* Biodata type filter */}
                    <select value={filters.biodataType} onChange={e => handleFilterChange('biodataType', e.target.value)}>
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {/* Division filter */}
                    <select value={filters.division} onChange={e => handleFilterChange('division', e.target.value)}>
                        <option value="">All</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                {/* Biodata cards */}
                <div className='grid grid-cols-3 gap-10'>
                    {data && data.map(biodata => (
                        <CardForm key={biodata._id} biodata={biodata} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterBiodata;
