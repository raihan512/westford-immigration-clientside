import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h3 className='text-5xl font-bold text-blue-2 text-center uppercase'>Our Services</h3>
            <div className='grid grid-cols-3 gap-5 mt-3'>
                <div className='p-2 border border-blue-3 rounded-md text-right'>
                    <img src="https://i.ibb.co/GP4Fnr9/canada3-1dc063d0.jpg" className='w-full' alt="" />
                    <h4 className='text-2xl font-bold text-red-2 text-left'>Immigrate to Canada</h4>
                    <p className='text-left text-md mt-3'>Details on how to make your dream of moving to Canada come true. More than 100 programs to choose from.</p>
                    <button className='py-2 px-4 bg-red-2 mt-2'>
                        <Link to='' className='text-md font-semibold text-white rounded-sm' >Details</Link>
                    </button>
                </div>
                <div className='p-2 border border-blue-3 rounded-md text-right'>
                    <img src="https://i.ibb.co/dW7wysX/study-026d1013.jpg" className='w-full' alt="" />
                    <h4 className='text-2xl font-bold text-red-2 text-left'>Study Permit</h4>
                    <p className='text-left text-md mt-3'>Study in Canada to increase your chances of immigrating as a skilled worker.</p>
                    <button className='py-2 px-4 bg-red-2 mt-2'>
                        <Link to='' className='text-md font-semibold text-white rounded-sm' >Details</Link>
                    </button>
                </div>
                <div className='p-2 border border-blue-3 rounded-md text-right'>
                    <img src="https://i.ibb.co/b6wmX9z/b-039adf57.jpg" className='w-full' alt="" />
                    <h4 className='text-2xl font-bold text-red-2 text-left'>Business Migration</h4>
                    <p className='text-left text-md mt-3'>Explore investment and business opportunities in one of the world's most free and stable economies.</p>
                    <button className='py-2 px-4 bg-red-2 mt-2'>
                        <Link to='' className='text-md font-semibold text-white rounded-sm' >Details</Link>
                    </button>
                </div>
            </div>
            <div className='mt-2 flex justify-end'>
                <button className='py-2 px-10 bg-blue-2  text-white rounded-sm'>
                    <Link to='/services'>See All</Link>
                </button>
            </div>
        </div>
    );
};

export default Services;


