import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';
// import Outlet from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <h2>Main Layout</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;