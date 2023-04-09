import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <div className='h-[114px] px-2 w-full flex justify-between md:px-14'>
                        <div className='left-navbar  flex items-center'>
                            <Link href="/">
                                <h1 className='text-5xl'>R<span className='font-bold'>.</span></h1>
                            </Link>
                        </div>
                        <div className='right-navbar  flex items-center'>
                            <ul className='flex gap-x-[30px]'>
                                <Link href="/photography">
                                    <li className=' border-t-4 border-transparent hover:border-black transition-all duration-300 text-base p-2 leading-[50px] text-[12px]'>PHOTOGRAPHY</li>
                                </Link>
                                <Link href="/resume">
                                    <li className=' border-t-4 border-transparent hover:border-black transition-all duration-300 text-base p-2 leading-[50px] text-[12px]'>RESUME</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
