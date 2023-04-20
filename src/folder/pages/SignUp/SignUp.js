import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contextAPI/userContext';
import { updateProfile } from 'firebase/auth';
import auth from '../../../firebase/firebaseConfig';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { singUp } = useContext(AuthContext)

    const signInForm = data => {
        singUp(data.email, data.password)
            .then(user => {
                updateProfile(auth.currentUser, {
                    displayName: `${data.name}`, photoURL: `${data.photo}`
                }).then(() => {
                    console.log(user)
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch(errors => {
                console.log(errors);
            })
        console.log(data)
    };
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 mx-10'>
            <img className=' w-full h-[500px]' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
            <div className=' mt-5 lg:mx-20'>
                <h1 className='font-bold text-3xl text-center text-[#1565c0]'>Please Sign Up</h1>
                <form onSubmit={handleSubmit(signInForm)}>
                    <div className='mt-5'>
                        <label className='font-bold'>Name</label><br />
                        <input {...register('name', {
                            required: 'Name id Required',
                        })} className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Name' type="text" />
                        {errors.name && <span className=' text-red-600'>{errors.name?.message}</span>}
                    </div>
                    <div className='mt-7'>
                        <label className='font-bold'>Email</label><br />
                        <input {...register('email', {
                            required: "email is Required"
                        })} className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Email' type="Email" />
                        {errors.email && <span className=' text-red-600'>{errors.email?.message}</span>}
                    </div>
                    <div className='mt-7'>
                        <label className='font-bold'>Photo (URL)</label><br />
                        <input {...register('photo', {
                            required: 'Photo (URL) id Required'
                        })} className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Photo (URL)' type="url" />
                        {errors.photo && <span className=' text-red-600'>{errors.photo?.message}</span>}
                    </div>
                    <div className='mt-5'>
                        <label className='font-bold'>Password</label><br />
                        <input {...register('password', {
                            required: 'Password is Required'
                        })} className=' py-2 px-2 w-full border-2 border-[#1565c0] text-[#1565c0] font-bold text-lg' placeholder='Inter Password' type="password" />
                        {errors.password && <span className=' text-red-600'>{errors.password?.message}</span>}
                    </div>
                    <Link to='/login' className=' font-bold mt-4 text-[#1b84fd]'>Login</Link>
                    <input type="submit" value="Sign Up" className=' py-4 mb-5 w-full bg-[#1565c0] hover:bg-[#1053a0] mt-5 text-lg font-bold text-white cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default SignUp;