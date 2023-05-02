import React, { useEffect, useState } from 'react';
import Chef from '../../shared/Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])
    
    return (
        <div className='mt-4'>
            <h4 className='text-3xl font-semibold text-center'>Popular Chefs</h4>
            {
                chefs.map(chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>)
            }
        </div>
    );
};

export default Chefs;