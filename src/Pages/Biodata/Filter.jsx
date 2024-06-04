import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [ageMin, setAgeMin] = useState('');
    const [ageMax, setAgeMax] = useState('');
    const [type, setType] = useState('');
    const [division, setDivision] = useState('');

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter({ ageMin, ageMax, type, division });
    };

    return (
        <form onSubmit={handleFilter} className="mb-8">
            <div className="flex flex-col">
                <label className="mb-2">Age Range</label>
                <div className="flex space-x-2">
                    <input
                        type="number"
                        placeholder="Min Age"
                        value={ageMin}
                        onChange={(e) => setAgeMin(e.target.value)}
                        className="input input-bordered"
                    />
                    <input
                        type="number"
                        placeholder="Max Age"
                        value={ageMax}
                        onChange={(e) => setAgeMax(e.target.value)}
                        className="input input-bordered"
                    />
                </div>
            </div>

            <div className="flex flex-col mt-4">
                <label className="mb-2">Gender</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div className="flex flex-col mt-4">
                <label className="mb-2">Division</label>
                <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="">Select Division</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagram">Chattagram</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Sylhet">Sylhet</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Filter</button>
        </form>
    );
};

export default Filter;



