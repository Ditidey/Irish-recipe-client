import React from 'react';

const Banner = () => {
    return (
        <div>
             <section className='flex shadow-2xl p-10'>
                <div class="text-secondary flex-1 p-6">                 
                        <h3 className='text-2xl font-bold'>Irish Breakfast + Lunch</h3>             
                    <p class="mb-3 opacity-60">
                    The Best Irish Brunch Recipes on Irish Brunch. Irish Eggs In A Well, Kefir And Cardamom Scones, Irish Soda Bread French Toast With Bailey's Irish Cream.traditional breakfast food, such as bacon, eggs, and toast or biscuits. Coffee and Donut Bar Serve a variety of coffee and donuts. Make sure you also have some nutritious options, like fruits and vegetables. Have a variety of fondue items with pots of melted chocolate, cheese, and oil.
                    </p>
                    <button
                        class="middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Read More
                    </button>
                </div>

                <div>

                </div>
            </section>
        </div>
    );
};

export default Banner;