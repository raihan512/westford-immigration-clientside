import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h4 className='text-xl text-red-2 font-bold my-5'>Add your review</h4>
            <form >
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