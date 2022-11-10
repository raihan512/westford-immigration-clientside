import React from 'react';
import { FaPhoneSquareAlt, FaWhatsappSquare, FaEnvelopeSquare, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className=' bg-blue-3'>
            <div className='max-w-screen-xl mx-auto py-20'>
                <h3 className='text-lg md:text-2xl lg:text-5xl font-bold text-white text-center uppercase mb-3'>Contact US</h3>
                <p className='flex items-center text-lg md:text-xl lg:text-3xl ml-3 lg:ml-0  text-white mb-2'><FaPhoneSquareAlt className='mr-2 text-red-2' /> +8801633661199</p>
                <p className='flex items-center text-lg md:text-xl lg:text-3xl ml-3 lg:ml-0  text-white mb-2'><FaWhatsappSquare className='mr-2 text-red-2' /> +14373889215</p>
                <p className='flex items-center text-lg md:text-xl lg:text-3xl ml-3 lg:ml-0  text-white mb-2'><FaEnvelopeSquare className='mr-2 text-red-2' /> westfordbd@gmail.com</p>
                <p className='flex items-center text-lg md:text-xl lg:text-3xl ml-3 lg:ml-0  text-white mb-2'><FaMapMarkerAlt className='mr-2 text-red-2' /> House #28, Road # 07, Block C, Niketan,
                    Gulshan – 1, Dhaka- 1212.</p>
            </div>
        </div>
    );
};

export default Contact;