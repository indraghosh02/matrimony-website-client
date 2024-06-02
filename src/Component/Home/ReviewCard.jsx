


// CardForm.jsx
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={review.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
              
            </div>
            <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-600 font-serif"> Got Married on: <span className='text-red-700'> {review.date}</span></h3>
                </a>
                <Rating
                                style={{ maxWidth: 180 }}
                                value={review.review}
                                readOnly
                            />
                <p className="leading-snug dark:text-gray-600 text-justify">{review.story}</p>
            </div>
          
        </div>
    </div>
    );
};

export default ReviewCard;
