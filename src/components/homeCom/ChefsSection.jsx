import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { contextProvider } from '../../AuthProvider';

const ChefsSection = () => {
     const {loading} = useContext(contextProvider);

    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://irish-recipe-assignment-server-ditidey2017-gmailcom.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    if(loading){
        return <div className='w-20 h-20 rounded-full animate-pulse bg-green-100 text-center'>
            <p className='animate-spin w-10 h-10 rounded-full'>__....__</p>
            <p className='text-orange-700 '>Loading..</p>
        </div>
    }
    return (
        <div className='bg-slate-50 p-5 mt-20 sm:pt-20 '>
            <p className='text-center mt-10 text-3xl font-bold shadow-sm mb-4'>Best Irish Chefs</p>
            <p className='text-center mt-2'>They have been working from a long time. They explored and experimented various recipes. <br /> They brought out delicious menu for branch and these are going so well in different places. You can choose one of them for your company/yourself.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4 mx-20 p-10'>

                {
                    chefs.map(chef => <div key={chef.id}>

                        <div className='p-4 ps-10 shadow-xl space-y-3 bg-green-50 hover:bg-orange-50'>
                            <LazyLoad height={250} offset={300} threshold={0.95}>
                            <img src={chef.chef_image} alt="" className='w-64 h-56 rounded-md' />
                            </LazyLoad>
                             
                            <p className='font-bold  ms-2 text-lg mt-6'>{chef.chef_name}</p>
                            <div className='grid grid-cols-2 gap-2'>
                                <p className='bg-white p-1 text-center rounded-md'>{chef.years_experience} year of experiences</p>
                                <p className='bg-white p-1 text-center rounded-md'> {chef.num_recipes} recipes</p>
                                <p className='bg-white p-1 text-center rounded-md flex'><FaHeart className='text-red-400 me-1 mt-1 h-4 ms-2 w-4'></FaHeart> {chef.likes} likes</p>
                                <p className='bg-white p-1 text-center rounded-md flex'><Rating style={{ maxWidth: 100 }} value={chef.rating}> </Rating> {chef.rating}</p>
                            </div>
                            <Link to={`/chefs/${chef.id}`}>  <button className='bg-orange-300 w-full p-2 mt-4 rounded-lg hover:bg-orange-600'>View Recipes Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefsSection;