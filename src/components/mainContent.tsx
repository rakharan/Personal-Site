import Image from 'next/image'
import React from 'react'
import waysbeans from "/public/projects/waysbeans.webp"
import landtick from "/public/projects/landtick.jpg"

export default function MainContent() {
    return (
        <>
            <div className='flex justify-center items-center min-h-screen gap-x-4'>
                <div className='left-content flex flex-col gap-y-4'>
                    <p className=' font-sans text-2xl font-semibold w-[400px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#FFF1A5] hover:via-[#C87D4C] hover:to-[#533636] transition-all duration-700 border-b-2 border-dotted py-4'>
                        An online marketplace <br />
                        for coffee enthusiasts
                        to discover  and purchase <br />
                        premium coffee from around the globe
                    </p>
                    <h1 className='text-lg leading-[28px] font-bold'>Waysbeans</h1>
                    <span className='text-[13px] font-bold'>2023</span>
                </div>
                <div className='right-content w-[620px] flex items-center justify-center cursor-pointer shadow-xl rounded-xl overflow-hidden'>
                    <div className=''>
                        <Image
                            src={waysbeans}
                            alt="waysbeans thumbnail"
                            placeholder="blur"
                            className=' object-contain hover:scale-110 transition-all duration-300'
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center min-h-screen gap-x-4'>
                <div className='left-content flex flex-col gap-y-4'>
                    <p className=' font-sans text-2xl font-semibold w-[400px] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#EC7AB7] hover:to-[#EC7A7A] transition-all duration-700 border-b-2 border-dotted py-4'>
                        A web-based platform <br />
                        that simplifies the process of booking <br />
                        and managing train tickets for users.
                    </p>
                    <h1 className='text-lg leading-[28px] font-bold'>LandTick</h1>
                    <span className='text-[13px] font-bold'>2023</span>
                </div>
                <div className='right-content w-[620px] flex items-center justify-center cursor-pointer shadow-xl rounded-xl overflow-hidden'>
                    <div className=''>
                        <Image
                            src={landtick}
                            alt="waysbeans thumbnail"
                            placeholder="blur"
                            className=' object-contain hover:scale-110 transition-all duration-300'
                        />
                    </div>
                </div>
            </div>

        </>

    )
}
