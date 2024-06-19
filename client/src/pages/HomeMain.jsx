import React from 'react'
import { Carousel } from "flowbite-react";

function HomeMain() {
    return (
        <>
        <section className='bg-blue-300 w-full relative'>
            <article className='relative'>
                <div className='overflow-hidden min-h-[500px] h-[100vh] relative' >
                    <div id="imageBG"></div>

                    <div className='absolute inset-0 flex flex-col justify-end p-10 content-start flex-wrap text-left gap-4'>

                        <div className='sticky bottom-0 grid grid-cols-2 font-serifs uppercase font-extralight w-full'>
                            <div className='text-white flex flex-col'>
                                <span className='font-courier leading-[18px]'>Roast & Grind</span>
                                <span className='text-[48px] leading-[60px]'>
                                    BREW PERFECTION,
                                </span>
                                <span className='text-[48px] leading-[60px]'>
                                    ONE BEAN AT A TIME
                                </span>

                                <div className='h-full self-start text-black items-start bg-bgColor rounded-xl uppercase'>
                                    <a href='/' className='rounded-xl h-14 w-60 font-courier flex flex-wrap justify-center content-center hover:text-white hover:bg-brown transition-all duration-300'>
                                        Take a look 
                                    </a>
                                </div>
                            </div>

                            <div href='/' className='rounded-xl bg-bgColor h-20 w-80 font-courier self-end justify-self-end'>
                                <Carousel leftControl=' ' rightControl=' ' indicators={false}>
                                    <span className='flex flex-col items-start justify-center px-4'>
                                        <div className='font-bold'>Free shipping for $50 order</div>
                                        <div>Shop now</div>
                                    </span>
                                    <span className='flex flex-col items-start justify-center px-4'>
                                        <div className='font-bold'>Goodbye</div>
                                        <div>See you later</div>
                                    </span>
                                </Carousel>
                            </div>
                        </div>

                        

                    </div>
                </div>

                {/* <div id='imageBG' className='relative min-h-[500px] h-[100vh] overflow-hidden'></div> */}
                <div className='relative z-[1] h-[200vh] font-serif text-[48px]'>
                    BREW PERFECTION,
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
                </div>

                
            </article>

            
        </section>
        </>
        
    )
}

export default HomeMain