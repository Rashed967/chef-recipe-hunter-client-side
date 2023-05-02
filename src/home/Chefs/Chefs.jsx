import React, { useEffect, useState } from 'react';
import Chef from '../../shared/Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])

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
        </div>
    );
};

export default Chefs;