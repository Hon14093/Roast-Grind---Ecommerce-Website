import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUsBody from '../components/AboutUsBody'

function AboutUsPage() {
    return (
        <>
            <div className='text-black'>

                <Header />

                <main>
                    <AboutUsBody />
                </main>

                <Footer theme={'bg-primaryGreen'} />
            </div>
        
        </>
    )
}

export default AboutUsPage