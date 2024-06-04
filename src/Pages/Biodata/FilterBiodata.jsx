import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CardForm from './CardForm';
import Filter from './Filter';


const FilterBiodata = () => {
    const axiosSecure = useAxiosPublic();
    const [filters, setFilters] = useState({});

    const { data } = useQuery({
        queryKey: ['biodata', filters],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/biodata/filter', {
                params: filters
            });
            return data;
        },
        enabled: Object.keys(filters).length > 0 // Only run the query if filters is not empty
    });

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className='flex p-10'>
            <div className='w-1/2'>
                <Filter onFilter={handleFilter} />
            </div>
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


export default FilterBiodata;
