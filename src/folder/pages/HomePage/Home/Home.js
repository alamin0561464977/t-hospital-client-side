import React from 'react';
import Navbar from '../../../share/Navbar/Navbar';
import TopBanner from './TopBanner';
import BookAppointment from '../BookAppointment';
import OurDoctors from './OurDoctors';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <BookAppointment></BookAppointment>
            <OurDoctors></OurDoctors>
        </div>
    );
};

export default Home;