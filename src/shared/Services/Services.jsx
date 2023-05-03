
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
// import Service from '../Service/Service';

const Services = () => {
    
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('https://afghan-chef-hunter-server-rashed967.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div className='mx-6'>
            <h2 className='text-center text-3xl font-bold mt-7'>Our services</h2>
           <div className='grid lg:grid-cols-3 space-x-4 justify-center'>
           {
            services.map(service => <Service
            key={service._id}
            service={service}
            ></Service>)
           }
           </div>
        </div>
    );
};

export default Services;