import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthProvider);
    const handleLogOut = () => {
        logout()
    }
    return (
        <nav className='p-3 shadow-md'>
            <div className='md:flex justify-between items-center max-w-screen-xl mx-auto'>
                <h3 className='text-2xl uppercase font-bold text-blue-1'>West<span className='text-red-1'>ford</span></h3>
                <div className='flex md:flex-row flex-col'>
                    <Link to='/'
                        className='text-paragraph-color font-semibold md:ml-5 hover:text-blue-1 hover:font-bold'
                    >Home
                    </Link>
                    <Link to='/services'
                        className='text-paragraph-color font-semibold md:ml-5 hover:text-blue-1 hover:font-bold'
                    >Services
                    </Link>
                    {
                        user?.uid ?
                            <>
                                <Link to='/add-service'
                                    className='text-paragraph-color font-semibold md:ml-5 hover:text-blue-1 hover:font-bold'
                                >ADD Service</Link>
                                <Link to='/my-reviews'
                                    className='text-paragraph-color font-semibold md:ml-5 hover:text-blue-1 hover:font-bold'
                                >My Reviews</Link>
                            </>
                            : <></>
                    }
                </div>
                <div className='flex items-center'>
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className='bg-red-2 py-2 px-5 text-white rounded-sm md:ml-2'>
                                <Link className='font-semibold'>Logout</Link>
                            </button>
                            :
                            <>
                                <button className='bg-red-2 py-2 px-5 text-white rounded-sm ml-2'>
                                    <Link to='/login' className='font-semibold'>Login</Link>
                                </button>
                                <button className='bg-blue-2 py-2 px-5 text-white rounded-sm ml-2'>
                                    <Link to='/signup' className='font-semibold'>Signup</Link>
                                </button>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;