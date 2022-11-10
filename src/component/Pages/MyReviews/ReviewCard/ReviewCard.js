import React from 'react';

const ReviewCard = ({ review, services }) => {
    const reviewId = review.serviceId;
    const servicesId = services.filter(service => service._id === reviewId);
    const serviceDetails = servicesId[0];
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-3">
            <figure><img src={serviceDetails.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {serviceDetails.title}
                </h2>
                <p>{review.text}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;