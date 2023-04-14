import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from "react-icons/fa";


const TopNavbar = () => {
    return (
        <div>
            <div className='w-full bg-[#1565c0]'>
                <section className='container mx-auto flex justify-between'>
                    <div className=' text-white font-bold flex gap-2 p-2'>
                        <h3>Contact: 012/8220909</h3>
                        <h3>Emergency: 012/822007</h3>
                    </div>
                    <div className='hidden lg:flex gap-1 my-auto text-lg text-white'>
                        <FaFacebookF></FaFacebookF>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaLinkedinIn></FaLinkedinIn>
                        <FaPinterest></FaPinterest>
                        <FaYoutube></FaYoutube>
                    </div>
                </section>
            </div>
        </div >
    );
};

export default TopNavbar;