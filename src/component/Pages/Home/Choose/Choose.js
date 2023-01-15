import React from 'react';
import { FaBook, FaUserClock, FaHandshake, FaAddressBook } from 'react-icons/fa'
import { SiStackexchange } from 'react-icons/si'
import { IoIosCheckboxOutline } from 'react-icons/io'

const Choose = () => {
    return (
        <section className='max-w-screen-xl mx-auto my-20'>
            <h3 className='text-lg md:text-5xl font-bold text-blue-2 text-center uppercase'>Why Choose US</h3>
            {/* Choose Content container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {/* Content Item */}
                <div className='p-5'>
                    <FaBook className='text-5xl mx-auto text-red-400 font-semibold mb-3' />
                    <h4 className='text-2xl text-center text-red-400 font-semibold mb-3'>Legal Representation</h4>
                    <p>Canada Government Authorized Immigration Consulting Firm.</p>
                    <p className='ml-5'>1. Federal & PNPs : R-413271</p>
                    <p className='ml-5'>2. SINP: 000678</p>
                    <p className='ml-5'>3. CAPIC : R-12514</p>
                </div>
                {/* Content Item */}
                <div className='p-5'>
                    <FaUserClock className='text-5xl mx-auto text-red-400 font-semibold mb-3' />
                    <h4 className='text-2xl text-center text-red-400 font-semibold mb-3'>Availability</h4>
                    <p>Clients can meet directly with Canadian Consultant as our president RCIC Mohammad Ali Azam Khan is available most of the time at our local office (Dhaka, Bangladesh Office).</p>
                </div>
                {/* Content Item */}
                <div className='p-5'>
                    <SiStackexchange className='text-5xl mx-auto text-red-400 font-semibold mb-3' />
                    <h4 className='text-2xl text-center text-red-400 font-semibold mb-3'>Programs</h4>
                    <p className='ml-5'>1. Skill Migration Programs</p>
                    <p className='ml-5'>2. Business Migration Programs</p>
                    <p className='ml-5'>3. Family Sponsorship Programs</p>
                </div>
                {/* Content Item */}
                <div className='p-5'>
                    <FaHandshake className='text-5xl mx-auto text-red-400 font-semibold mb-3' />
                    <h4 className='text-2xl text-center text-red-400 font-semibold mb-3'>Thousands of Successful clients</h4>
                </div>
                {/* Content Item */}
                <div className='p-5'>
                    <IoIosCheckboxOutline className='text-5xl mx-auto text-red-400 font-semibold mb-3' />
                    <h4 className='text-2xl text-center text-red-400 font-semibold mb-3'>Longtime Experience</h4>
                    <p>we have more than 12 years’ experience and most of the staffs working with us from the begging.</p>
                </div>
                {/* Content Item */}
                <div className='p-5'>
                    <FaAddressBook className='text-5xl mx-auto text-red-400 font-semibold mb-3' />
                    <h4 className='text-2xl text-center text-red-400 font-semibold mb-3'>Same Address</h4>
                    <p>we are available at this same address for more than 12 years with a good reputation.</p>
                </div>
            </div>
        </section>
    );
};

export default Choose;