import React from 'react';
import Banner from '../homeCom/Banner';
import ChefsSection from '../homeCom/ChefsSection';
import Chart from '../homeCom/Chart';
import BannerImage from '../homeCom/BannerImage';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        // Four components for four section
        <div className='mb-10 '> 
            <Banner></Banner>
            <ChefsSection></ChefsSection>
            <BannerImage></BannerImage>
            <Chart></Chart>
        </div>
    );
};

export default Home;