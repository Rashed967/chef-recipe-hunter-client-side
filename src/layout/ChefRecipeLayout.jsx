import React, { useContext } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { MagnifyingGlass } from 'react-loader-spinner';

const ChefRecipeLayout = () => {
    const {loading} = useContext(AuthContext)
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <MagnifyingGlass
  visible={loading}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
        </div>
    );
};

export default ChefRecipeLayout;