import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <header className='Events py-14'>
                <h1 className=' text-5xl ml-10 font-bold text-[#1565c0]'>Blogs Page</h1>
            </header>
            <main className=' container mx-auto my-14 flex flex-wrap-reverse lg:grid grid-cols-1 lg:grid-cols-6 gap-5'>
                <div className='col-span-4'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
                <div className='col-span-2 p-8 border-2'>
                    <input type="search" name="" id="" placeholder='Search Blog' className=' p-3 w-full border-4 font-bold text-lg border-blue-500' />
                    <h1 className=' font-bold text-2xl my-3 text-[#1565c0]'>Blog Categories</h1>
                    <div className=' flex justify-between p-2 items-center border-b-4 hover:border-blue-500 text-lg font-bold'>
                        <h1>Blogs</h1>
                        <p>(10)</p>
                    </div>
                    <div className=' flex justify-between p-2 items-center border-b-4 hover:border-blue-500 text-lg font-bold'>
                        <h1>Counseling</h1>
                        <p>(7)</p>
                    </div>
                    <div className=' flex justify-between p-2 items-center border-b-4 hover:border-blue-500 text-lg font-bold'>
                        <h1>Heath</h1>
                        <p>(3)</p>
                    </div>
                    <div className=' flex justify-between p-2 items-center border-b-4 hover:border-blue-500 text-lg font-bold'>
                        <h1>Kids</h1>
                        <p>(12)</p>
                    </div>
                    <div className=' flex justify-between p-2 items-center border-b-4 hover:border-blue-500 text-lg font-bold'>
                        <h1>Dental</h1>
                        <p>(5)</p>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold mt-5 text-blue-500'>Blog Tags</h1>
                        <div className=' font-bold mt-2'>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Beach</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Health</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>holiday</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Information</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Music</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Nature</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Randomstuff</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Rock</p>
                            <p className='border-2 border-black inline-block rounded p-1 px-3 m-2'>Kids</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Blogs;