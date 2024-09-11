import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import FeaturedProductsSection from '../components/homeComponents/FeaturedProductsSection'

function HomeMain() {
    return (
        <>
        <section className='w-full relative'>

            <HeroSection />

            <FeaturedProductsSection />

            {/* Reviews Section ? */}
            <article>

            </article>
            
        </section>
        </>
        
    )
}

export default HomeMain