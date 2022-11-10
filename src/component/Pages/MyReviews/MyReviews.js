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
            {
                reviews.length > 0 ?
                    <>
                        <h3 className='text-lg md:text-2xl lg:text-5xl font-bold text-blue-2 text-center uppercase mb-3'>You wrote {reviews.length} reviews</h3>
                        <div className='flex justify-center flex-wrap mx-5'>
                            {
                                reviews.map(review => <ReviewCard
                                    key={review._id}
                                    services={services}
                                    review={review}
                                ></ReviewCard>)
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className='flex justify-center items-center h-96'>
                            <h3 className='text-lg md:text-2xl lg:text-4xl text-red-2 font-bold uppercase'>No Reviews Added</h3>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyReviews;