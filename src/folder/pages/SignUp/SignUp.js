import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 mx-10'>
            <img className=' w-full h-[500px]' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
            <form className=' mt-5 lg:mx-20'>
                <h1 className='font-bold text-3xl text-center text-[#1565c0]'>Please Sign Up</h1>
                <div className='mt-5'>
                    <label className='font-bold'>Name</label><br />
                    <input className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Name' type="text" />
                </div>
                <div className='mt-7'>
                    <label className='font-bold'>Email</label><br />
                    <input className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Email' type="Email" />
                </div>
                <div className='mt-7'>
                    <label className='font-bold'>Photo (URL)</label><br />
                    <input className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Photo (URL)' type="file" />
                </div>
                <div className='mt-5'>
                    <label className='font-bold'>Password</label><br />
                    <input className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Password' type="password" />
                </div>
                <Link to='/login' className=' font-bold mt-4 text-[#1b84fd]'>Login</Link>
                <input type="submit" value="Sign Up" className=' py-4 w-full bg-[#1565c0] hover:bg-[#1053a0] mt-5 text-lg font-bold text-white cursor-pointer' />
                <div className="divider">OR</div>
                <button className=' text-xl font-bold text-white bg-slate-600 w-full py-4 hover:bg-slate-700 cursor-pointer'>Google</button>
            </form>
        </div>
    );
};

export default SignUp;