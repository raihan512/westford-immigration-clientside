import React, { useContext, useState } from 'react';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = ({ service }) => {
    const addReviewToast = () => toast("Your review added");
    // Get current service id
    const { _id: serviceId } = service;
    // Get reviewr user details
    const user = useContext(AuthProvider);
    const userEmail = user?.user?.email;
    const userImg = user?.user?.photoURL;
    // Set initial review value
    const [addReview, setAddReview] = useState({});
    const handleOnBlur = event => {
        const text = event.target.value;
        const reviewDetails = { text, serviceId, userEmail, userImg }
        setAddReview(reviewDetails);
    }
    const handleOnSubmit = event => {
        event.preventDefault();
        if (addReview.text < 10) {
            alert('Please add a meaningful review')
        } else {
            fetch('http://localhost:5000/reviews', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addReview)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        addReviewToast()
                    }
                })
                .catch(error => console.error(error))
        }

    }
    return (
        <div>
            {
                userEmail ? <>
                    <h3 className='text-2xl font-bold text-red-3'>Add review</h3>
                    <form onSubmit={handleOnSubmit}>
                        <input
                            onBlur={handleOnBlur}
                            type="text" className='border w-2/4' />
                        <br />
                        <button className='py-2 px-5 rounded-sm bg-blue-2 text-white mt-2'>Submit</button>
                    </form>
                    <ToastContainer />
                </> : <>
                    <h3 className='text-red-600 text-2xl font-bold'>Please login to add a review</h3>
                </>
            }

        </div>
    );
};

export default AddReview;