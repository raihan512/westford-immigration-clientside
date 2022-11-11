import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewCard = ({ review, services }) => {
    const deleteReviewToast = () => toast("Review deleted");
    const reviewId = review.serviceId;
    const servicesId = services.filter(service => service._id === reviewId);
    const serviceDetails = servicesId[0];



    const handleDelete = (reviewId) => {
        const deleteReview = window.confirm(`You want to delete your review from ${serviceDetails.title} service?`)
        if (deleteReview) {
            fetch(`https://server-liart-six.vercel.app/reviews/${reviewId}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        deleteReviewToast();
                    }
                })
        }
    }

    return (
        <div className="card w-96 mx-2 border rounded-sm shadow-sm my-3">
            <figure><img src={serviceDetails.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    ServiceName:  {serviceDetails.title}
                </h2>
                <p>My Review: {review.text}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-blue-2 rounded-sm border-0">Update</button>
                    <button className="btn bg-red-2 rounded-sm border-0" onClick={() => handleDelete(review._id)}>Delete</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ReviewCard;