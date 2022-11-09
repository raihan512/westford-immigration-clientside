import React from 'react';

const ReviewItem = ({ review }) => {
    const { text, userImg, userEmail, serviceId } = review;
    return (
        <div>
            <h5>{userEmail}</h5>
            <p>{text}</p>
        </div>
    );
};

export default ReviewItem;