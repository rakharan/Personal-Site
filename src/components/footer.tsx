import moment from 'moment'
import React, { useEffect } from 'react'
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import Link from 'next/link';


export default function Footer() {
    useEffect(() => {
        const interval = setInterval(() => {
            const clockElement = document.getElementById("clock");
            if (clockElement) {
                clockElement.innerHTML = `${moment().format('LTS')}`;
            }
        }, 1000);
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);
    return (
        <div className='w-full flex justify-center  items-center px-10 md:px-20 lg:px-24'>
            <div className='footer-content w-full border-t-4 py-8 items-center font-bold text-lg flex flex-col md:flex-row md:justify-between '>
                <div className='left-content flex gap-x-14 justify-center'>
                    <div className='location flex flex-col gap-y-2'>
                        <h1 className='opacity-50 font-semibold'>Location</h1>
                        <h2>Indonesia</h2>
                    </div>
                    <div className='local-time flex flex-col gap-y-2'>
                        <h1 className='opacity-50 font-semibold'>Local Time</h1>
                        <h2 id='clock'></h2>
                    </div>
                </div>

                <div className='right-content flex flex-col justify-center text-center mt-8 md:mt-0 gap-y-2 items-center'>
                    <h1 className='opacity-50 font-semibold'>Let&apos;s Connect</h1>

                    <div className='flex justify-center gap-x-5'>
                        <Link href="https://www.linkedin.com/in/rakha-randhikatama/" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                            <RxLinkedinLogo size={`1.5em`} />
                        </Link>
                        <Link href="https://github.com/rakharan" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                            <AiOutlineGithub size={`1.5em`} />
                        </Link>
                        <Link href="https://www.instagram.com/rakharan/" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                            <RxInstagramLogo size={`1.5em`} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
