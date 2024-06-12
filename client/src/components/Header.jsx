import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex gap-4 justify-between items-center p-2 relative font-bold'>
            <section>
                Logo
            </section>

            <section className='absolute left-1/2 transform -translate-x-1/2 font-bold'>
                <ul className='flex gap-8'>
                    <li className='navList group'>
                        <a className='navAnchor'>Shop</a>
                    </li>
                    <li className='navList group'>
                        <a className='navAnchor'>About Us</a>
                    </li>
                    <li className='navList group'>
                        <a className='navAnchor'>Contact</a>
                    </li>
                    <li className='navList group'>
                        <a className='navAnchor'>FAQ</a>
                    </li>
                </ul>
            </section>

            <section className='flex items-center gap-4'>
                <a href="/" className='p-2 bg-white rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </a>

                <button className='p-2 bg-white rounded-full flex gap-1 items-center'>
                    <p className='px-1'>Cart</p>
                    <p className='rounded-full border-black border size-6'> 0 </p>
                </button>
            </section>

            {/* <a class="group text-pink-500 transition-all duration-300 ease-in-out" href="#">
                <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    This text gets 'underlined' on hover
                </span>
            </a> */}

        </div>
    )
}

export default Header