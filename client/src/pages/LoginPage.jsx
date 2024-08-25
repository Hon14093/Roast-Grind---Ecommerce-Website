import React from 'react'
import Header from '../components/Header'
import LoginBody from '../components/LoginBody'

function LoginPage() {
    return (
        <>
            <div className='text-black'>

                <Header />

                <main>
                <LoginBody />
                </main>

            </div>
        
        </>
    )
}

export default LoginPage