import React from 'react';
import TopNavbar from '../TopNavbar/TopNavbar';
import { FaClinicMedical, FaAlignLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/userContext';



const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user)
    return (
        <div className=' w-full border-b-2'>
            <TopNavbar></TopNavbar>
            <nav className=' w-full'>
                <div className='container mx-auto flex justify-between text-lg font-bold'>
                    <h1 className=' p-2 lg:p-5 font-bold text-xl flex gap-2'>Balsam Al Razi <span className=' text-2xl text-red-500
                    '><FaClinicMedical></FaClinicMedical></span></h1>
                    <div className=' p-3 font-bold text-lg'>
                        <label htmlFor="my-drawer-4" className="drawer-button lg:hidden"><FaAlignLeft></FaAlignLeft></label>
                    </div>
                    <div className=' hidden justify-items-center my-auto lg:flex gap-3'>
                        <Link to='/'>Home</Link>
                        <Link>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="m-1">Doctors</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/'>Dr. John Allen</Link></li>
                                    <li><Link to='/'>Dr. Janne Wilson</Link></li>
                                    <li><Link to='/'>Dr. Adaline Becka</Link></li>
                                </ul>
                            </div>
                        </Link>
                        <Link>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className=" m-1">Departments</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/'>Cardiology</Link></li>
                                    <li><Link to='/'>Dental</Link></li>
                                    <li><Link to='/'>Neurologist</Link></li>
                                    <li><Link to='/'>Pediatric</Link></li>
                                    <li><Link to='/'>Urology</Link></li>
                                    <li><Link to='/'>XRAY</Link></li>
                                </ul>
                            </div>
                        </Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/events'>Events</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link>Contact</Link>
                        {
                            user?.uid ? <Link><button onClick={() => logout()}>Log Out</button></Link> :
                                <Link to='/login'>Login</Link>
                        }
                        {
                            user?.uid ? <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;