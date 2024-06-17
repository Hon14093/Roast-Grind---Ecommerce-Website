import React from 'react'

function HomeMain() {
    return (
        <>
            <section className='bg-blue-300 w-full relative'>
                <article className='relative'>
                    <div className='overflow-hidden min-h-[500px] h-[100vh] relative' >
                        <div id="imageBG"></div>

                        <div className='absolute inset-0 flex flex-col justify-end p-10 content-start flex-wrap text-left'>
                            <div className='z-[999] sticky bottom-0 text-white flex flex-col font-serifs uppercase font-extralight'>
                                <span className='font-courier leading-[18px]'>Roast & Grind</span>
                                <span className='text-[48px] leading-[60px]'>
                                    BREW PERFECTION,
                                </span>
                                <span className='text-[48px] leading-[60px]'>
                                    ONE BEAN AT A TIME
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <div id='imageBG' className='relative min-h-[500px] h-[100vh] overflow-hidden'></div> */}
                    <div className='relative z-[1] h-[200vh] font-serif text-[48px]'>
                        BREW PERFECTION,
                    </div>
                </article>

                
            </section>
        </>
        
    )
}

export default HomeMain