import Image from 'next/image'
import React from 'react'
import waysbeans from "/public/projects/waysbeans.webp"
import landtick from "/public/projects/landtick.jpg"
import Link from 'next/link'
import { AiOutlineGithub } from "react-icons/ai"
import { FaGlobeAsia } from "react-icons/fa";

export default function MainContent() {
    return (
        <div>
            <div className='flex justify-center'>
                <span className='text-[50px] border-b-4 hover:border-transparent transition-all duration-300 border-black'>Portfolio</span>

            </div>
            <div className='flex justify-center items-center min-h-screen gap-x-4'>
                <div className='left-content flex flex-col gap-y-4'>
                    <p className=' font-sans text-2xl font-semibold w-[400px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFF1A5] hover:via-[#C87D4C] hover:to-[#533636] transition-all duration-700 border-b-2 border-dotted py-4'>
                        An online marketplace <br />
                        for coffee enthusiasts
                        to discover  and purchase <br />
                        premium coffee from around the globe
                    </p>
                    <h1 className='text-lg leading-[28px] font-bold'>Waysbeans</h1>
                    <div className='flex gap-x-5'>
                        <span className='text-[13px] font-bold'>2023</span>
                        <div className='flex gap-x-4'>
                            <Link href="https://github.com/rakharan/Waysbeans" target='_blank' className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                                <AiOutlineGithub />
                            </Link>
                            <Link href="https://waysbeans-teal.vercel.app" target='_blank' className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                                <FaGlobeAsia />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='right-content w-[620px] flex items-center justify-center cursor-pointer shadow-xl rounded-xl overflow-hidden'>
                    <div className=''>
                        <Link href="https://waysbeans-teal.vercel.app">
                            <Image
                                src={waysbeans}
                                alt="waysbeans thumbnail"
                                placeholder="blur"
                                className=' object-contain hover:scale-110 transition-all duration-300'
                            />
                        </Link>

                    </div>
                </div>
            </div >

            <div className='flex justify-center items-center min-h-screen gap-x-4'>
                <div className='left-content flex flex-col gap-y-4'>
                    <p className=' font-sans text-2xl font-semibold w-[400px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#EC7AB7] hover:to-[#EC7A7A] transition-all duration-700 border-b-2 border-dotted py-4'>
                        A web-based platform <br />
                        that simplifies the process of booking <br />
                        and managing train tickets for users.
                    </p>
                    <h1 className='text-lg leading-[28px] font-bold'>LandTick</h1>
                    <div className='flex gap-x-5'>
                        <span className='text-[13px] font-bold'>2023</span>
                        <div className='flex gap-x-4'>
                            <Link href="https://github.com/rakharan/Final-Task" target='_blank' className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                                <AiOutlineGithub />
                            </Link>
                            <Link href="https://final-task-pi.vercel.app/" target='_blank' className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                                <FaGlobeAsia />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='right-content w-[620px] flex items-center justify-center cursor-pointer shadow-xl rounded-xl overflow-hidden'>
                    <div className=''>
                        <Link href="https://final-task-pi.vercel.app/">
                            <Image
                                src={landtick}
                                alt="waysbeans thumbnail"
                                placeholder="blur"
                                className=' object-contain hover:scale-110 transition-all duration-300'
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
