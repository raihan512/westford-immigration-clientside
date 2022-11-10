import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { _id, img, title, desc, price } = service;
    return (
        <div className='p-2 border border-blue-3 rounded-md text-right'>

            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <h4 className='text-2xl font-bold text-red-2 text-left'>{title}</h4>
            <p className='text-left text-md mt-3'>
                {
                    desc.length > 100 ?
                        <>
                            ${desc.slice(0, 99)}...
                        </>
                        :
                        <>
                            ${desc}
                        </>
                }
            </p>
            <p className='flex justify-between text-xl font-bold text-red-2'>
                <span>Fee</span>
                <span>${price}</span>
            </p>
            <button className='py-2 px-4 bg-red-2 mt-2'>
                <Link to={`/services/${_id}`} className='text-md font-semibold text-white rounded-sm' >View Details</Link>
            </button>
        </div>
    );
};

export default Service;