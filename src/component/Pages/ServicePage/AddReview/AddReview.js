import React, { useContext } from 'react';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';

const AddReview = ({ service }) => {
    const user = useContext(AuthProvider);

    const handleAddReview = event => {
        event.preventDefault();
        const message = event.target.message.value;
        console.log(message);

        fetch('http://localhost:5000/addreview', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.acknowledged === true) {
                //     alert("user added succssfully")
                // }
            })
    }

    return (
        <div>
            <h4 className='text-xl text-red-2 font-bold my-5'>Add your review</h4>
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
        </div>
    );
};

export default AddReview;