import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contextAPI/userContext';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
            })
    }, [])
    return (
        <div>
            <header className='Events py-14'>
                <h1 className=' text-5xl ml-10 font-bold text-[#1565c0]'>Gallery Page</h1>
            </header>
            <main>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-8 row-gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            photos.map(photo =>
                                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                                    <div className="relative p-5 bg-white rounded-sm">
                                        <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                                            <img className=' w-full h-full' src={photo.image} alt="" />
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Gallery;