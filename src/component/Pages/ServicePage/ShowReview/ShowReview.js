import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem/ReviewItem';

const ShowReview = ({ service }) => {
    const { _id } = service;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://server-liart-six.vercel.app/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, [reviews])
    return (
        <div>
            <h3 className='text-xl md:text-2xl lg:text-3xl text-red-2 font-bold'>Users reviews about this post</h3>
            {
                reviews.length === 0 ?
                    <>
                        <p>This item has no review</p>
                    </>
                    :
                    <>{
                        reviews.map(review => <ReviewItem
                            key={review._id}
                            review={review}
                        ></ReviewItem>)
                    }</>
            }
        </div>
    );
};

export default ShowReview;