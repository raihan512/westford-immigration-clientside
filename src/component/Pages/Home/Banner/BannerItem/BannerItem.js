import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const BannerItem = ({ bannerItem }) => {
    const { img, id, next, prev } = bannerItem;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-carousel'>
                <img src={img} className="w-full" alt='' />
            </div>
            <div className='absolute md:top-1/4 md:left-1/4 p-3 md:p-0'>
                <h1 className='text-lg md:text-4xl font-bold uppercase text-paragraph'>Bangldesh's most trusted
                    <br />
                    <span className='text-red-2'> immigrant</span> and<span className='text-red-2'> visa</span>
                    <br />
                    consultant
                </h1>
                <p className='max-w-md text-sm md:text-xl font-semibold my-1 md:my-5'>Get services from registered and authentic RCIC - Regulated Canadian Immigration Consultant in
                    <span className='text-red-2'> Dhaka, Bangladesh</span> </p>
                <button className='text-sm md:text-md py-2 px-8 bg-blue-2 rounded-sm text-white font-semibold'>
                    <Link to='/about-us'>More Details</Link>
                </button>
            </div>
            <div className="absolute flex justify-between transform-translate-y-1/2  left-100 md:left-5 right-0 md:right-5 bottom-8 md:top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle"><FaLongArrowAltLeft /></a>
                <a href={`#slide${next}`} className="btn btn-circle"><FaLongArrowAltRight /></a>
            </div>

        </div>
    );
};

export default BannerItem;