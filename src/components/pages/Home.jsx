import React from 'react';
import Banner from '../homeCom/Banner';
import ChefsSection from '../homeCom/ChefsSection';
import Chart from '../homeCom/Chart';
import BannerImage from '../homeCom/BannerImage';

const Home = () => {
    return (
        <div className='md:mx-32 sm:mx-4 my-10 '> 
            <Banner></Banner>
            <ChefsSection></ChefsSection>
            <BannerImage></BannerImage>
            <Chart></Chart>
        </div>
    );
};

export default Home;