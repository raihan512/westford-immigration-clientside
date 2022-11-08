import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='py-3 shadow-md'>
            <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
                <h3 className='text-2xl uppercase font-bold text-blue-1'>West<span className='text-red-1'>ford</span></h3>
                <div className='flex'>
                    <Link to='/' className='text-paragraph-color font-semibold ml-5 hover:text-blue-1 hover:font-bold'>Home</Link>
                    <Link to='/services' className='text-paragraph-color font-semibold ml-5 hover:text-blue-1 hover:font-bold'>Services</Link>
                    <Link to='/about-us' className='text-paragraph-color font-semibold ml-5 hover:text-blue-1 hover:font-bold'>About Us</Link>
                </div>
                <div className='flex'>
                    <button className='bg-red-2 py-2 px-5 text-white rounded-sm ml-2'>
                        <Link to='/login' className='font-semibold'>Login</Link>
                    </button>
                    <button className='bg-blue-2 py-2 px-5 text-white rounded-sm ml-2'>
                        <Link to='/signup' className='font-semibold'>Signup</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;