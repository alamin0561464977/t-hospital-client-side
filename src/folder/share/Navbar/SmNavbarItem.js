import React from 'react';
import { useContext } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube, FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contextAPI/userContext';

const SmNavbarItem = () => {
    const { user, logout } = useContext(AuthContext);
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
                {
                    user?.uid ? <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div> : ''
                }
            </div>
            <div>
                <div className=' justify-items-center my-auto lg:flex gap-3'>
                    <Link to='/'>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Home</div>
                    </Link>
                    <Link>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500 flex justify-between items-center dropdown dropdown-hover'>
                            <label tabIndex={0}>Doctors</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                            <FaChevronDown></FaChevronDown>
                        </div>
                    </Link>
                    <Link>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500 flex justify-between items-center dropdown dropdown-hover'>
                            <label tabIndex={0}>Departments</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                            <FaChevronDown></FaChevronDown>
                        </div>
                    </Link>
                    <Link to='/gallery'>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Gallery</div>
                    </Link>
                    <Link to='/services'>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Services</div>
                    </Link>
                    <Link to='/events'>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Events</div>
                    </Link>
                    <Link>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Blogs</div>
                    </Link>
                    <Link>
                        <div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Contact</div>
                    </Link>
                    {
                        user?.uid ? <button className=' w-full text-left' onClick={() => logout()}><div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Log Out</div></button> :
                            <Link className=' w-full' to='/login'><div className=' py-3 px-2 font-bold text-lg border-b-2 hover:border-sky-500'>Login</div></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default SmNavbarItem;