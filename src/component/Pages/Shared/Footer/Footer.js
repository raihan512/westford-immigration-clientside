import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className=' border-t-2'>
            <div className='max-w-screen-xl mx-auto'>
                <footer className="footer p-10 text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Immigration</a>
                        <a className="link link-hover">Study</a>
                        <a className="link link-hover">Work</a>
                        <a className="link link-hover">Business</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className='flex'>
                            <FaFacebook className='mr-2 text-3xl' />
                            <FaYoutube className='mr-2 text-3xl' />
                            <FaTwitter className='mr-2 text-3xl' />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;