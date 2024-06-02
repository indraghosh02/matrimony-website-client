import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import React, { useState, useEffect } from 'react';

const Counter = () => {
    const axiosSecure = useAxiosPublic();
    const { data } = useQuery({
        queryKey: ['biodata'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/biodata');
            return data;
        }
    });

    const { data: marriages } = useQuery({
        queryKey: ['marriages'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/marriage');
            return data;
        }
    });


    
    const [totalBiodata, setTotalBiodata] = useState(0);
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    const [totalMarriages, setTotalMarriages] = useState(0);
    
    useEffect(() => {
        if (data) {
            setTotalBiodata(data.length);
            // setTotalMarriage(marriage.length)
            const males = data.filter(entry => entry.type === "Male");
            setMaleCount(males.length);
            setFemaleCount(data.length - males.length);
        }
        if (marriages) {
            setTotalMarriages(marriages.length);
        }
    }, [data, marriages]);
    
    return (
        <div className="lg:ml-24 lg:mr-24">
                 <h2 className='text-4xl font-bold mb-4 text-center text-red-600 font-serif'>Total Counts </h2>
            <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-2xl md:space-x-6 bg-yellow-400 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
				<img src="https://i.ibb.co/LkS70jj/icons8-cv-53.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-4xl font-semibold leading-none"> {totalBiodata}</p>
				<p className="capitalize text-xl">Total Biodatas</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-2xl md:space-x-6 bg-red-400 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
				<img src="https://i.ibb.co/sjPdDb3/icons8-male-64.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-4xl font-semibold leading-none">{maleCount}</p>
				<p className="capitalize text-xl">Male Biodatas </p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-2xl md:space-x-6 bg-fuchsia-500 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
				<img src="https://i.ibb.co/417HbSP/icons8-female-40.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-4xl font-semibold leading-none">{femaleCount}</p>
				<p className="capitalize text-xl">Female Biodatas</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-2xl md:space-x-6 bg-emerald-400 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
				<img src="https://i.ibb.co/Wymr4yf/icons8-marriage-64.png" alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-4xl font-semibold leading-none">{totalMarriages}</p>
				<p className="capitalize text-xl">Total Marriages</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Counter;
