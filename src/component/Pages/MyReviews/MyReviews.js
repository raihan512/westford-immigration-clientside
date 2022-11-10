import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import ReviewCard from './ReviewCard/ReviewCard';

const MyReviews = () => {
    const user = useContext(AuthProvider);
    const services = useLoaderData();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?userEmail=${user?.user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, [reviews])

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h3 className='text-4xl text-red-2 font-bold uppercase'>You wrote {reviews.length} reviews</h3>
            <div className='flex justify-between flex-wrap'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        services={services}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;