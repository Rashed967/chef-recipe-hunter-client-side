import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Footer from '../../shared/Footer/Footer';


const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className='py-10 text-center font-semibold text-3xl bg-yellow-100 text-black'>
            <h1>Blog page</h1>
            </div>

            <div className='mt-8 space-y-4 lg:w-2/4 mx-auto md:w-3/4 p-5'>
            <h1 className='text-2xl font-semibold '>differences between uncontrolled and controlled components</h1>
            <p className='text-xl font-normal'>A controlled component is a component that is controlled by a higher-level component or system. It receives its inputs from the higher-level component and responds only to the commands or requests that it receives from that component.</p>
            <p className='text-xl font-normal'>
            An uncontrolled component, on the other hand, is a component that can operate independently of a higher-level component. It receives its inputs from external sources and can be affected by external factors. The behavior of an uncontrolled component is not entirely predictable, as it can be influenced by factors outside of its control.
            </p>
            </div>


            <div className='mt-8 space-y-4 lg:w-2/4 mx-auto md:w-3/4 p-5'>
            <h1 className='text-2xl font-semibold '>How to validate React props using PropTypes</h1>
            <p className='text-xl font-normal'>"PropTypes" that allows you to validate the type and shape of the props passed to a component. PropTypes helps catch errors early in development by providing runtime checks on the props that are passed to a component.</p>
            <p className='text-xl font-normal'>
            If any of the expected props are not provided, or if they are provided with an incorrect type, PropTypes will generate a console warning message, alerting you to the issue.
            </p>
            </div>


            <div className='mt-8 space-y-4 lg:w-2/4 mx-auto md:w-3/4 p-5'>
            <h1 className='text-2xl font-semibold '>difference between nodejs and express js</h1>
            <p className='text-xl font-normal'>Node.js is a server-side runtime environment for executing JavaScript code outside of a web browser. It allows developers to build scalable and high-performance applications by leveraging its asynchronous, event-driven architecture.</p>
            <p className='text-xl font-normal'>
            Express.js, on the other hand, is a web application framework built on top of Node.js that simplifies the process of building web applications and APIs. Express.js provides a higher-level, feature-rich API for handling HTTP requests, routing, middleware, and other web application functionality.
            </p>
            </div>


            <div className='mt-8 space-y-4 lg:w-2/4 mx-auto md:w-3/4 p-5'>
            <h1 className='text-2xl font-semibold '>What is a custom hook, and why will you create a custom hook?</h1>
            <p className='text-xl font-normal'>Custom hook is a reusable function that allows you to encapsulate logic and share it between multiple components. Custom hooks are a way to abstract away complex logic and make it more easily reusable across different components, without having to repeat the same code in each component.</p>
            <p className='text-xl font-normal'>
            Custom hooks are useful in situations where you need to share logic between multiple components, or when you have complex logic that you want to keep separate from your component code.
            </p>
            </div>

        </div>
    );
};

export default Blog;