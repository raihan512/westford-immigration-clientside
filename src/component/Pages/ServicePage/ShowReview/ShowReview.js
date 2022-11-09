import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem/ReviewItem';

const ShowReview = ({ service }) => {
    const { _id } = service;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
                reviews.map(review => <ReviewItem
                    key={review._id}
                    review={review}
                ></ReviewItem>)
            }
        </div>
    );
};

export default ShowReview;