import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemDetails from './ItemDetails';

const ChefDetails = () => {
    const details = useLoaderData();
    const { id, chef_image, chef_name, num_recipes, years_experience, rating, likes, short_bio, recipes } = details;
    return (
        <div>
            <div className='px-20 py-10 shadow-lg md:flex sm:mb-5' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "500px", }}>
                <img src={chef_image} alt="" className='rounded-full shadow-lg' />

                <div className='md:text-yellow-50 p-10 text-center m-20 mb-4'>
                    <p className='text-center text-4xl font-semibold font-serif'>{chef_name}</p>
                    <p className='text-xl font-serif my-3'>{short_bio}</p>
                    <p className='font-serif text-xl mt-10'>
                        <span className='me-6 shadow-2xl bg-slate-500 p-3 px-4 rounded-lg'>Total {num_recipes} recipes</span>
                        <span className='me-6 shadow-2xl bg-slate-500 p-3 px-4 rounded-lg'>Experiences {years_experience} years</span>
                    </p>
                    <p className='flex mt-10'>
                        <span className='font-mono text-lg text-yellow-200 mx-8 text-center ps-24'>{likes} likes</span>
                        <Rating style={{ maxWidth: 120 }} value={rating}> </Rating>
                        <span className='ms-1 mt-1 text-yellow-200'>{rating}</span>
                    </p>
                </div>
            </div>

            <div className='mx-20 my-10 grid md:grid-cols-3 gap-5'>
                {
                    recipes.map(item=> <ItemDetails item={item}></ItemDetails>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;