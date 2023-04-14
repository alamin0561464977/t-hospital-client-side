import React from 'react';
import Navbar from '../../../share/Navbar/Navbar';
import TopBanner from './TopBanner';
import BookAppointment from '../BookAppointment';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <BookAppointment></BookAppointment>
        </div>
    );
};

export default Home;