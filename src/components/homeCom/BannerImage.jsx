import React, { useEffect, useState } from 'react';
 

const BannerImage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('https://irish-recipe-assignment-server-ditidey2017-gmailcom.vercel.app/recipes')
        .then(res => res.json())
        .then(data =>  setRecipes(data))
    },[])
    return (
        <div className='p-10 my-10 shadow-sm '  >
            <p className='font-serif font-bold text-2xl text-center my-8 shadow-sm p-1'>Trending Now</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-6 gap-5'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='p-6 '>
                        <img src={recipe.image} alt="" className='w-32 h-32 rounded-full hover:animate-ping'/>
                        <p className='text-center my-2 font-mono'>{recipe.name}</p>
                    </div>)
                }
            </div>
            <hr />
        </div>
    );
};

export default BannerImage;