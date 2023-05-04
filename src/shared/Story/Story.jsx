import React from 'react';
import image from '../../assets/story.png'
import { FaShare } from 'react-icons/fa';

const Story = () => {
    return (
        <div>
            
            <div className='md:flex mt-8 mx-6 py-7'>
                <div className='md:w-2/4'><img src={image} alt="" /></div>
                <div className='md:w-2/4 space-y-4'>
                <h3 className='text-xl font-semibold text-lime-800'>Our story</h3>
                    <h2 className='text-3xl font-bold md:my-4'>Trusted By 200 + Satisfied Clients</h2>
                    <p className=' font-medium md:mb-6'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
                    <ul className='space-y-4 flex flex-col'>
                        <li className='bg-lime-200 font-medium rounded-md inline p-3 lg:w-3/6 w-3/4 transform hover:translate-x-2'> <FaShare className='inline'/>  Fresh and Fast food Delivery</li>
                        <li className='bg-lime-200 font-medium rounded-md inline p-3 lg:w-3/6 w-3/4 transform hover:translate-x-2'> <FaShare className='inline'/> 24/7 Customer Support</li>
                        <li className='bg-lime-200 font-medium rounded-md inline p-3 lg:w-3/6 w-3/4 transform hover:translate-x-2'> <FaShare className='inline'/> Easy Customization Options</li>
                        <li className='bg-lime-200 font-medium rounded-md inline p-3 lg:w-3/6 w-3/4 transform hover:translate-x-2'> <FaShare className='inline'/> Delicious Deals for Delicious Meals</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Story;