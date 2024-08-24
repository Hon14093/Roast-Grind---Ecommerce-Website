import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginBody from '../components/LoginBody'

function LoginPage() {
    return (
        <>
            <div className='text-black'>

                <Header />

                <main>
                <LoginBody />
                </main>

                <footer>
                <Footer />
                </footer>
            </div>
        
        </>
    )
}

export default LoginPage