import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaGlassCheers } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black opacity-80 px-20 py-3 bottom-0'>
            <Marquee speed={100} className='text-white font-semibold text-2xl mb-5 mt-5'>
                <p>It is the Irish Foods based website. There are information about great chefs and their famous recipes.</p>
            </Marquee>
            <div className='md:flex md:justify-around'> 
            <p><FaGlassCheers className='text-green-400 w-20 h-20 mt-1 ms-6'></FaGlassCheers> 
            <span className='text-orange-400 font-bold text-3xl'>Irish Brunch</span></p>       

            <div className='text-center space-y-5 mb-3'>
                <p className='text-white text-2xl'>Contact us</p>
                <input type="text"   placeholder='Your message' className='p-2'/> <br />
                <input type="email"   placeholder='Your email' className='p-2'/>
            </div>
            <div className='text-white'>
                <p className='text-white text-2xl mb-3'>Products and Services</p>
                <p>Fresh Meals</p>
                <p>Experienced Chefs</p>
                <p>Free Meals for test</p>
            </div>
            </div>
            <p className='text-white text-center text-sm mt-10'> &copy; Irish Food Copy Right 2023!</p>
        </div>
    );
};

export default Footer;