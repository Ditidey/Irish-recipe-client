import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ChefsSection = () => {
    // const chefs = useLoaderData();
    // console.log(chefs)
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://irish-recipe-assignment-server.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <>
            <p className='text-center mt-20 text-2xl font-bold'>Best Chefs in Ireland</p>
            <p className='text-center mt-2'>They have been working from a long time. They explored and experimented various recipes. <br /> They brought out delicious menu for branch and these are going so well in different places. You can choose one of them for your company/yourself.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4 mx-20 p-10'>

                {
                    chefs.map(chef => <div key={chef.id}>

                        <div className='p-4 ps-10 shadow-xl space-y-3 bg-green-50'>
                            <img src={chef.chef_image} alt="" />
                            <p className='font-bold'>{chef.chef_name}</p>
                            <p>Year of experiences: {chef.years_experience}</p>
                            <p>Total Recipes: {chef.num_recipes}</p>
                            <p>Likes: {chef.likes} <span>Ratings: {chef.rating}</span></p>
                            <Link>  <button className='bg-orange-300 p-2 mt-4 rounded-lg hover:bg-orange-600'>View Recipes Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default ChefsSection;