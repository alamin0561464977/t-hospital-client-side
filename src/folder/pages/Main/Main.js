import React from 'react';
import Navbar from '../../share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import SmNavbarItem from '../../share/Navbar/SmNavbarItem';

const Main = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <SmNavbarItem></SmNavbarItem>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;