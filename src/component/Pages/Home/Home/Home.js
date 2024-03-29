import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../../UseTitle/UseTitle';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Contact from '../Contact/Contact';
import Fees from '../Fees/Fees';
import Services from '../Services/Services';

const Home = () => {
    UseTitle('Home')
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <Fees></Fees>
            <Choose></Choose>
            <Contact></Contact>
        </div>
    );
};

export default Home;