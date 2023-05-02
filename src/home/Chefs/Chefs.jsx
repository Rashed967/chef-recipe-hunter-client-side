import React, { useEffect, useState } from 'react';

const Chefs = () => {
    const [chefs, setChefs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    }, [])
    
    return (
        <div className='mt-4'>
            <h4 className='text-3xl font-semibold text-center'>Popular Chefs</h4>
            {
                chefs.map(chef => console.log(chef))
            }
        </div>
    );
};

export default Chefs;