import React, { useContext, useState } from 'react';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';

const AddReview = ({ service }) => {
    const user = useContext(AuthProvider);
    const [review, setReview] = useState({});


    const handleAddReview = event => {
        event.preventDefault();
        const text = event.target.message.value;
        const userEmail = user.user.email;
        const serviceId = service._id;
        const userImg = user.user.photoURL;

        const userReview = { text, userEmail, userImg, serviceId }
        setReview(userReview);
        console.log(review);
        fetch('http://localhost:5000/addreview', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    alert("added succssfully")
                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h4 className='text-xl text-red-2 font-bold my-5'>Add your review</h4>
            {
                user?.user?.email ?
                    <>
                        <form onSubmit={handleAddReview}>
                            <textarea
                                name="message"
                                placeholder='Give you review here'
                                className='w-full h-20 border rounded-sm p-2'>
                            </textarea>
                            <button
                                type="submit"
                                className='p-2 px-5 rounded-sm bg-red-2 text-white'>Add Review</button>
                        </form>
                    </>
                    :
                    <>
                        <h3 className='text-xl font-bold '>Plese Login to add your review</h3>
                    </>
            }

        </div>
    );
};

export default AddReview;