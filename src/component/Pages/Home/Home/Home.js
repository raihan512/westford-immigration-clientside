import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Fees from '../Fees/Fees';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Fees></Fees>
            <Contact></Contact>
        </div>
    );
};

export default Home;