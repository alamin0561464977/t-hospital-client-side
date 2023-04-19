import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube, FaChevronDown, FaClinicMedical } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='Footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white p-8 lg:py-16 lg:px-40'>
            <div className=''>
                <h1 className=' text-lg font-bold'>The Bast Hospital</h1>
                <h1 className='text-3xl font-bold mb-8'>Balsam Al Razi Hospital</h1>
                <p>The most Professional health care <br /> service provider in the Balsam Al Razi Hospital</p>
            </div>
            <div className='col-spam-2'>
                <h1 className='border-b-4 border-white text-xl font-bold'>Menu</h1>
                <div className=' flex flex-col mt-4 gap-3'>
                    <Link className=' text-lg font-bold border-b-2 hover:border-[#1565c0]' to='/'>Home</Link>
                    <Link className=' text-lg font-bold border-b-2 hover:border-[#1565c0]' to='/services'>Services</Link>
                    <Link className=' text-lg font-bold border-b-2 hover:border-[#1565c0]' to='/'>Gallery</Link>
                    <Link className=' text-lg font-bold border-b-2 hover:border-[#1565c0]' to='/'>Blogs</Link>
                </div>
            </div>
            <div>
                <div className='flex justify-center gap-4 my-auto text-2xl text-white'>
                    <FaFacebookF></FaFacebookF>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    <FaLinkedinIn></FaLinkedinIn>
                    <FaPinterest></FaPinterest>
                    <FaYoutube></FaYoutube>
                </div>
                <div className='text-center '>
                    <FaClinicMedical className='w-36 mt-4 mx-auto h-40'></FaClinicMedical>
                    <h1 className=' mt-5 text-sm'>© 2023 Al Razi Hospital.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;