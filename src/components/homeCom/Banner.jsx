import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../../../public/img/ima1.jfif'
import img2 from '../../../public/img/ima2.jfif'
import img3 from '../../../public/img/ima3.jfif'
const Banner = () => {
    return (
        <div>
            <section className='flex justify-between shadow-2xl p-10 bg-orange-50'>
                <div class="text-secondary p-6 w-1/2 space-y-4 bg-orange-100 rounded-md hover:bg-slate-50 me-10">
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

                <div className='w-1/2 py-10 ps-10 hover:bg-slate-50'>
                    <CarouselProvider naturalSlideHeight={120} naturalSlideWidth={300} totalSlides={3}  >
                        <Slider  >
                            <Slide index={0}><img src={img1} className='shadow-xl rounded-sm'></img>
                                <p className='mt-2 ms-5'>Irish Breakfast shot</p></Slide>
                            <Slide index={1}><img src={img2} className='shadow-xl rounded-sm'></img>
                                <p className='mt-2 ms-5'>Irish Lunch Bum</p>
                            </Slide>
                            <Slide index={2}><img src={img3} className='shadow-xl rounded-sm'></img>
                                <p className='mt-2 ms-5'>Irish Brunch Hub</p>
                            </Slide>
                        </Slider>

                        <ButtonBack className='me-2 ms-14 hover:text-blue-500'>Back</ButtonBack>
                        <ButtonNext className='hover:text-blue-500'>Next</ButtonNext>
                    </CarouselProvider>
                </div>
            </section>
        </div>
    );
};

export default Banner;