import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <div className='h-[114px] px-5 w-full flex justify-between md:px-14'>
                        <div className='left-navbar  flex items-center'>
                            <Link href="/">
                                <h1 className='text-3xl md:text-5xl'>R<span className='font-bold'>.</span></h1>
                            </Link>
                        </div>
                        <div className='right-navbar  flex items-center'>
                            <ul className='flex gap-x-[30px]'>
                                <li>
                                    <Link href="/photography">
                                        <span className=' border-t-4 border-transparent hover:border-black transition-all duration-300 p-2 leading-[50px] text-sm md:text-lg'>PHOTOGRAPHY</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resume">
                                        <span className=' border-t-4 border-transparent hover:border-black transition-all duration-300 text-sm p-2 leading-[50px] md:text-lg'>RESUME</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
