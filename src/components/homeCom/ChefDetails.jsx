import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import {   FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 

const ChefDetails = () => {
    const details = useLoaderData();

    const { id, chef_image, chef_name, num_recipes, years_experience, rating, likes, short_bio, recipes } = details;

    const favoriteToast = (event) => {

        toast.success(`😲 Wow ${event.target.value} is Favorite recipe!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        event.target.disabled = true;
        event.target.style.background = 'red';
    }

    return (
        <div>

            <div className='px-20 pb-10 shadow-lg md:flex md:justify-between sm:mb-5' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
                <img src={chef_image} alt="" className='rounded-full shadow-lg w-1/3' />

                <div className='text-yellow-50 p-10 text-center m-20 mb-4'>
                    <p className='text-center text-4xl font-semibold font-serif'>{chef_name}</p>
                    <p className='text-xl font-serif my-3'>{short_bio}</p>
                    <p className='font-serif text-xl mt-10 '>
                        <span className='me-6 shadow-2xl bg-slate-500 p-3 px-4 rounded-lg'>Total {num_recipes} recipes</span>
                        <span className='me-6 shadow-2xl bg-slate-500 p-3 px-4 rounded-lg'>Experiences {years_experience} years</span>
                    </p>
                    <p className='md:flex mt-10'>
                        <span className=' flex font-mono text-lg text-yellow-200 mx-8 text-center ps-24'><FaHeart className='text-white me-1 mt-1 h-5 ms-8 w-4'></FaHeart> {likes} likes</span>
                        <Rating style={{ maxWidth: 120 }} value={rating}> </Rating>
                        <span className='ms-1 mt-1 text-yellow-200'>{rating}</span>
                    </p>
                </div>
            </div>
            <ToastContainer></ToastContainer>

            {/* for showing views */}
            <div className='mx-20 my-10 grid md:grid-cols-3 gap-5'>
                {
                    recipes.map((item, id) =>
                        <div key={id} className='p-10 shadow-lg bg-slate-200'>
                            <p className='text-2xl font-bold text-center my-4'>{item.recipe_name}</p>

                            <div className='flex justify-around my-4'>
                                <button value={item.recipe_name} onClick={favoriteToast}
                                    className='bg-orange-100 px-6 w-1/2 py-2 rounded-xl hover:bg-orange-200'
                                 > Favorite
                                </button>

                                <p className='md:flex text-yellow-500 space-x-1'>
                                    <Rating style={{ maxWidth: 100 }} value={item.rating}></Rating>
                                    <span className='mt-2 font-semibold'>{item.rating}</span>
                                </p>
                            </div>

                            <p className='text-xl mb-2 font-semibold'>Ingredients: </p>
                            {
                                item.ingredients.map((ingre, i) =>
                                    <ul key={i}>
                                        <li>{ingre}</li>
                                    </ul>)
                            }
                            <p className='mt-4 text-xl font-semibold'>Cooking Methods:</p>
                            <p className='bg-slate-100 my-4 p-5'>{item.cooking_method}</p>


                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ChefDetails;