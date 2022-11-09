import React from 'react';

const ServiceDetails = ({ service }) => {

    const { img, title, price, desc } = service;
    return (
        <div>
            <img src={img} alt="" className='w-full' />
            <h3 className='text-4xl text-red-2 font-bold uppercase'>{title}</h3>
            <p><strong>Fee: ${price}</strong></p>
            <p>{desc}</p>
        </div>
    );
};

export default ServiceDetails;