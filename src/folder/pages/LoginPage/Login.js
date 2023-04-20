import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contextAPI/userContext';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { login, googleLogin } = useContext(AuthContext);
    const loginForm = data => {
        login(data.email, data.password)
            .then(user => {
                console.log(user);
            })
            .catch(errors => {
                console.log(errors);
            })
        console.log(data)
    };
    const handelGoogleLogin = () => {
        googleLogin()
            .then(user => {
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 m-10'>
            <img className=' w-full h-[500px]' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
            <div className='my-16 lg:mx-20'>
                <h1 className='font-bold text-3xl text-center text-[#1565c0]'>Please Login</h1>
                <form onSubmit={handleSubmit(loginForm)}>
                    <div className='mt-7'>
                        <label className='font-bold'>Email</label><br />
                        <input {...register("email", {
                            required: 'Email Address is required'
                        })} className=' py-4 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Email' type="Email" />
                        {errors.email && <p role="alert" className=' text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className='mt-5'>
                        <label className='font-bold'>Password</label><br />
                        <input {...register('password', {
                            required: "Password is required",
                            minLength: 6,
                        })} className=' py-4 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Password' type="password" />
                        {errors.password && <p role="alert" className=' text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <Link to='/sign-up' className=' font-bold mt-4 text-[#1b84fd]'>SignUp</Link>
                    <input type="submit" value="Login" className=' py-4 w-full bg-[#1565c0] hover:bg-[#1053a0] mt-5 text-lg font-bold text-white cursor-pointer' />
                </form>
                <div className="divider">OR</div>
                <button onClick={handelGoogleLogin} className=' text-xl font-bold text-white bg-slate-600 w-full py-4 hover:bg-slate-700 cursor-pointer'>Google</button>
            </div>
        </div>
    );
};

export default Login;