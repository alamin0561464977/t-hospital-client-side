import React from 'react';
import Navbar from '../../../share/Navbar/Navbar';
import TopBanner from './TopBanner';
import BookAppointment from '../BookAppointment';
import OurDoctors from './OurDoctors';
import LatestNews from './LatestNews';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <BookAppointment></BookAppointment>
            <OurDoctors></OurDoctors>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;