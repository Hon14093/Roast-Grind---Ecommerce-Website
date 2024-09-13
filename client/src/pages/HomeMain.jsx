import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import FeaturedProductsSection from '../components/homeComponents/FeaturedProductsSection'
import StorySection from '../components/homeComponents/StorySection'

function HomeMain() {
    return (
        <>
        <section className='w-full relative'>

            <HeroSection />

            <FeaturedProductsSection />

            <StorySection />

            {/* Reviews Section ? */}
            <article>

            </article>
            
        </section>
        </>
        
    )
}

export default HomeMain