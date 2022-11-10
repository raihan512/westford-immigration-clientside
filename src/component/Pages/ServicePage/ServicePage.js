import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from './AddReview/AddReview';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import ShowReview from './ShowReview/ShowReview';

const ServicePage = () => {
    const service = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='mx-5 lg:mx-0'>
                <ServiceDetails service={service}></ServiceDetails>
                <ShowReview service={service}></ShowReview>
                <AddReview service={service}></AddReview>
            </div>
        </div>
    );
};

export default ServicePage;