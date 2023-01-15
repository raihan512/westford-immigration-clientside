import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../UseTitle/UseTitle';
import AddReview from './AddReview/AddReview';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import ShowReview from './ShowReview/ShowReview';

const ServicePage = () => {
    UseTitle('Service Details')
    const service = useLoaderData();

    return (
        <section className='max-w-screen-xl mx-auto my-20'>
            <div className='mx-5 lg:mx-0'>
                <ServiceDetails service={service}></ServiceDetails>
                <ShowReview service={service}></ShowReview>
                <AddReview service={service}></AddReview>
            </div>
        </section>
    );
};

export default ServicePage;