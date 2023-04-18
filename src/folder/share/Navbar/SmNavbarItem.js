import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube, FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SmNavbarItem = () => {
    return (
        <div>
            <div className='p-3 bg-[#1565c0] flex justify-between'>
                <div className='flex gap-2 my-auto text-xl text-white'>
                    <FaFacebookF></FaFacebookF>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    <FaLinkedinIn></FaLinkedinIn>
                    <FaPinterest></FaPinterest>
                    <FaYoutube></FaYoutube>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" />
                    </div>
                </div>
            </div>
            <div>
                <div className=' justify-items-center my-auto lg:flex gap-3'>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500 flex justify-between items-center dropdown dropdown-hover'>
                        <Link>
                            <label tabIndex={0}>Doctors</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </Link>
                        <FaChevronDown></FaChevronDown>
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500 flex justify-between items-center dropdown dropdown-hover'>
                        <Link>
                            <label tabIndex={0}>Departments</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </Link>
                        <FaChevronDown></FaChevronDown>
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>
                        <Link to='/gallery'>Gallery</Link><br />
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>
                        <Link>Services</Link><br />
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>
                        <Link to='/events'>Events</Link><br />
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>
                        <Link>Blogs</Link><br />
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>
                        <Link>Contact</Link><br />
                    </div>
                    <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmNavbarItem;