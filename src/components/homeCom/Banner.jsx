import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../../../public/img/ima1.jfif';
import img2 from '../../../public/img/ima2.jfif';
import img3 from '../../../public/img/ima3.jfif';
import img4 from '../../../public/img/ima4.jfif';
import img5 from '../../../public/img/ima5.jfif';
const Banner = () => {
    return (
        <div  className='p-10 shadow-lg opacity-90 md:mb-0 sm:mb-52' style={{backgroundImage:'url("https://images.unsplash.com/photo-1487532195053-ae7d32261c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',   }}>

            <section className='md:flex Md:justify-between shadow-2xl md:p-10 pt-10 mx-10'>
                <div className="text-secondary p-6 md:ps-10 md:w-1/2 space-y-4 bg-orange-100 rounded-md hover:bg-slate-50 me-10">
                    <h3 className='text-2xl font-bold font-serif'>Irish Breakfast + Lunch</h3>
                    <p className="mb-3 opacity-60 text-black">
                        The Best Irish Brunch Recipes on Irish Brunch. Irish Eggs In A Well, Kefir And Cardamom Scones, Irish Soda Bread French Toast With Bailey's Irish Cream.traditional breakfast food, such as bacon, eggs, and toast or biscuits. Coffee and Donut Bar Serve a variety of coffee and donuts. Make sure you also have some nutritious options, like fruits and vegetables. Have a variety of fondue items with pots of melted chocolate, cheese, and oil.
                    </p>
                    <button
                        className="mt-8 middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Read More
                    </button>
                </div>

                <div className='md:w-1/2 rounded-md md:py-10 py-5 my-2 ps-10 hover:bg-slate-50 bg-orange-50'>
                    <CarouselProvider naturalSlideHeight={120} naturalSlideWidth={250} totalSlides={5}  >
                        <Slider  >
                            <Slide index={0}><img src={img1} className='shadow-xl rounded-sm w-2/3'></img>
                                <p className='mt-2 ms-5 '>Irish Breakfast shot</p></Slide>
                            <Slide index={1}><img src={img2} className='shadow-xl rounded-sm'></img>
                                <p className='mt-2 ms-5'>Irish Lunch Bum</p>
                            </Slide>
                            <Slide index={2}><img src={img3} className='shadow-xl rounded-sm'></img>
                                <p className='mt-2 ms-5'>Irish Brunch Hub</p>
                            </Slide>
                            <Slide index={2}><img src={img4} className='shadow-xl rounded-sm'></img>
                                <p className='mt-2 ms-5'>Irish Brunch Hub</p>
                            </Slide>
                            <Slide index={2}><img src={img5} className='shadow-xl rounded-sm'></img>
                                <p className='mt-2 ms-5'>Irish Brunch Hub</p>
                            </Slide>
                        </Slider>

                        <ButtonBack className='sm:mt-3 me-2 ms-14 hover:text-blue-500 bg-orange-300 py-1 px-3 rounded-md'>Back</ButtonBack>
                        <ButtonNext className='hover:text-blue-500 sm:mt-3 bg-green-300 py-1 px-3 rounded-md'>Next</ButtonNext>
                    </CarouselProvider>
                </div>
            </section>
        </div>
    );
};

export default Banner;