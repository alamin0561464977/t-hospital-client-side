import React from 'react';

const TopBanner = () => {
    return (
        <div className="TopBanner h-full p-3 lg:py-40 lg:px-20">
            <h1 className=' mt-8 lg:text-xl font-bold bg-cyan-500 px-1 lg:p-1 inline-block text-white rounded-md'>The Bast Hospital</h1><br />
            <h1 className=' text-lg lg:text-6xl font-bold text-cyan-500 lg:py-2 inline-block'>Balsam Al Razi Hospital
            </h1>
            <p className=' text-xs lg:text-xl lg:mt-5 my-3 font-bold'>Get the bast professional medical <br />
                help from our modern hospital.</p>
            <button className="btn lg:btn btn-outline btn-info  lg:my-4 lg:text-lg lg:font-bold hover:bg-cyan-600">BOOK APPOINTMENT</button>
        </div>
    );
};

export default TopBanner;