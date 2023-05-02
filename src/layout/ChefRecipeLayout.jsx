import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const ChefRecipeLayout = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <h2>Chef layout</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefRecipeLayout;