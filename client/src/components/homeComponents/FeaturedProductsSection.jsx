import React from 'react'
import logoWhite from '../../images/white.png'
import lumiCoffee from '../../images/Lumi.png'

function FeaturedProductsSection() {
    return (
        <article className='relative z-[1]  text-[48px]'>
            {/* BREW PERFECTION,
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img src="https://cdn.sanity.io/images/4t60hegj/production/18721882ff8c9b0e8f97e7abf15777e3df020bb6-3000x3000.png?auto=format&q=75&url=https://cdn.sanity.io/images/4t60hegj/production/18721882ff8c9b0e8f97e7abf15777e3df020bb6-3000x3000.png&w=1400" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                </Carousel>
            </div>   */}
            

            <div class="text-darkOlive body-font">

                <div className='text-center pt-14 text-7xl font-greatVibes italic'>
                    <div className="h-1 w-16 bg-yellow-500 mr-4 text-center"></div>
                    <h1>
                        Featured Products 
                    </h1>
                    <div className="h-1 w-16 bg-yellow-500 ml-4"></div>
                </div>

                


                <div class="container px-5 pb-20 pt-8 mx-auto">
                    <div class="flex flex-wrap -m-4">

                        
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-darkOlive border-opacity-60 rounded-3xl overflow-hidden poping-out-card bg-darkOlive">
                                <img className='w-full object-cover object-center rounded-b-md' src="https://cdn.sanity.io/images/4t60hegj/production/64372ed7017bd8e771bcd3fe2568299b94838b5b-3000x3000.png?auto=format&q=75&url=https://cdn.sanity.io/images/4t60hegj/production/64372ed7017bd8e771bcd3fe2568299b94838b5b-3000x3000.png&w=1400" alt="" />

                                <div class="p-6 bg-darkOlive text-ivory">
                                    <h1 class="font-serifs text-xl text-center mb-3">
                                        Coffee Beans
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                {/* <img className='w-full  object-center' src="https://shop.phase-connect.com/cdn/shop/files/luminewcoffee_1776x1184.png?v=1715241054" alt="" /> */}
                                <img src={lumiCoffee} alt="" />

                                <div class="p-6">
                                    <h1 class="font-serifs text-lg text-center mb-3">The Catalyzer</h1>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <img className='w-full object-cover object-center' src="https://cdn.sanity.io/images/4t60hegj/production/64372ed7017bd8e771bcd3fe2568299b94838b5b-3000x3000.png?auto=format&q=75&url=https://cdn.sanity.io/images/4t60hegj/production/64372ed7017bd8e771bcd3fe2568299b94838b5b-3000x3000.png&w=1400" alt="" />

                                <div class="p-6">
                                    <h1 class="font-serifs text-lg text-center mb-3">The Catalyzer</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className='big-action-button w-full text-ivory'>
                            Shop All Coffee
                        </button>
                    </div>
                </div>

                
            </div>

        </article>
    )
}

export default FeaturedProductsSection