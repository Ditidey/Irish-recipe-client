import React from 'react';
import Banner from '../homeCom/Banner';
import ChefsSection from '../homeCom/ChefsSection';

const Home = () => {
    return (
        <div className='mx-32 my-10'>
            <Banner></Banner>
            <ChefsSection></ChefsSection>
        </div>
    );
};

export default Home;