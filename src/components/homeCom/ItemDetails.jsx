import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ItemDetails = ({ item, favoriteToast }) => {
    const { recipe_name, ingredients, cooking_method, rating } = item;

    // const favoriteToast = () => {
    //     toast("Wow!! Favorite Added", {
    //         icon: "🚀",
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     })
    // }
    return (
        <div className='p-10 shadow-lg bg-slate-200'>
        
            <p className='text-2xl font-bold text-center my-4'>{recipe_name}</p>

            <div className='flex justify-around my-4'>
                <button onClick={favoriteToast} className='bg-orange-100 px-6 w-1/2 py-2 rounded-xl hover:bg-orange-200'>Favorite</button>
                <p className='flex text-yellow-500 space-x-1'> <Rating style={{ maxWidth: 100 }} value={rating}></Rating>
                    <span className='mt-2 font-semibold'>{rating}</span> </p>
            </div>

            <p className='text-xl mb-2 font-semibold'>Ingredients: </p>
            {
                ingredients.map(ingre =>
                    <ul>
                        <li>{ingre}</li>
                    </ul>)
            }
            <p className='mt-4 text-xl font-semibold'>Cooking Methods:</p>
            <p className='bg-slate-100 my-4 p-5'>{cooking_method}</p>


        </div>
    );
};

export default ItemDetails;