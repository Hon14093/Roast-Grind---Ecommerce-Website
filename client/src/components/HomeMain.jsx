import React from 'react'

function HomeMain() {
    return (
        <>
            <section className='bg-blue-300 w-full relative'>
                <article className='relative'>
                    <div className='overflow-hidden min-h-[500px] h-[100vh] relative' >
                        <div id="imageBG"></div>

                        <div className='absolute inset-0 flex flex-col justify-end'>
                            <div className='z-[999] sticky bottom-0 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptatem voluptates hic repudiandae praesentium inventore nesciunt mollitia consequatur rem voluptatum deleniti optio doloremque perspiciatis, saepe voluptas dignissimos! Nostrum, repellat perferendis.</div>
                        </div>
                    </div>

                    {/* <div id='imageBG' className='relative min-h-[500px] h-[100vh] overflow-hidden'></div> */}
                    <div className='relative z-[1] h-[200vh]'>
                        Text and shit
                    </div>
                </article>

                
            </section>
        </>
        
    )
}

export default HomeMain