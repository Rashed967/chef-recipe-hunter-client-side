import React, { useContext, useEffect, useState } from 'react';
import Chef from '../../shared/Chef/Chef';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { MagnifyingGlass } from 'react-loader-spinner';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    const {loading} = useContext(AuthContext)



    useEffect(() => {
        fetch('https://afghan-chef-hunter-server-rashed967.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])
    
    return (
        
        <div className='mt-4'>
            
            <h4 className='text-3xl font-semibold text-center'>Popular Chefs</h4>
            <div className='container grid md:grid-cols-2 lg:grid-cols-3 space-x-4 mt-7'>
            {
                chefs.map(chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>)
            }
            </div>
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

export default Chefs;