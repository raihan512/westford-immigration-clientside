import React from 'react';
import { FaUser } from 'react-icons/fa';


const ReviewItem = ({ review }) => {
    const { text, userImg, userEmail } = review;
    return (
        <div className='border rounded-sm my-2 p-3'>
            {
                userImg ?
                    <img src={userImg} alt="" className='h-12 w-12 rounded-full' /> :
                    < FaUser className='h-12 w-12 rounded-full' />
            }
            <h5>User: {userEmail}</h5>
            <p>Review: {text}</p>
        </div>
    );
};

export default ReviewItem;