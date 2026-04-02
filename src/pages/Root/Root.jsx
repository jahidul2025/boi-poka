import React from 'react';
import NavBar from '../../compononts/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../compononts/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;