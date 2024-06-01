// CardForm.jsx
import React from 'react';

const CardForm = ({ biodata }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white w-64">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{biodata.biodataType}</div>
                <img className="w-32 h-32 mx-auto rounded-full" src={biodata.image} alt="Profile" />
                <div className="mt-4">
                    <p><strong>Biodata ID:</strong> {biodata.biodataId}</p>
                    <p><strong>Gender:</strong> {biodata.type}</p>
                    <p><strong>From:</strong> {biodata.permanentDivision}</p>
                    <p><strong>Age:</strong> {biodata.age}</p>
                    <p><strong>Occupation:</strong> {biodata.occupation}</p>
                </div>
            </div>
            <div className="px-6 py-4">
                <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default CardForm;
