import React from 'react';
import Marquee from 'react-fast-marquee';

const Footer = () => {
    return (
        <div className='bg-black opacity-80 px-20 py-5 bottom-0'>
            <Marquee speed={100} className='text-white font-semibold text-2xl mb-5 mt-5'>
                <p>It is the Irish Foods based website. There are information about great chefs and their famous recipes.</p>
            </Marquee>
            <div className='text-center space-y-5'>
                <p className='text-white text-2xl'>Contact us</p>
                <input type="text"   placeholder='Your message' className='p-2'/> <br />
                <input type="email"   placeholder='Your email' className='p-2'/>
            </div>
            <p className='text-white text-center text-sm mt-5'> &copy; Irish Food Copy Right 2023!</p>
        </div>
    );
};

export default Footer;