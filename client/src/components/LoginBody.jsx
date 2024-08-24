import React from 'react'

function LoginBody() {
    return (
        <section className='bg-blue-100 w-full flex h-screen'>
            <article className='w-1/2'>
                hello
            </article>

            <article className='w-1/2 bg-loginPageGreen text-bgColor items-center justify-center'>
                <div className='h-screen w-full flex flex-col justify-center md:px-[40px] sm:px-[20px]'>
                    <div className='mx-auto w-full lg:max-w-[400px]'>
                        <h2 className="text-center font-serifs text-[40px] lg:text-[60px] font-thin">Sign in</h2>
                        <form className="mt-8 space-y-6">
                            <div>
                                <input type="email" placeholder='Email' className='input-primary block w-full' />
                            </div>
                            <div>
                                <input type="password" placeholder='Password' className='input-primary block w-full' />
                            </div>
                            <button type='submit' className='block w-full button text-loginPageGreen'>
                                Sign In
                            </button>
                        </form>

                        <div className='font-mono mt-4 text-[14px] flex flex-col text-center gap-2'>
                            <p className=''>
                                <a href="" className='underline hover:no-underline hover:text-bgColor'>Forgot your password?</a>
                            </p>
                            <p>
                                Don't have an account? 
                                <a href="" className='underline hover:no-underline hover:text-bgColor pl-2'>Sign up now!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default LoginBody