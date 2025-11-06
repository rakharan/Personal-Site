import React from 'react'
import CV from "@/assets/CV/CV.webp"
import Image from 'next/image'
import Layout from '@/components/layout'
import Link from 'next/link'
export default function Resume() {
    return (

        <>
            <Layout title='Resume | Rakha Randhikatama'>
                <main className='min-h-screen'>
                    <div className='flex justify-center mt-[75px] '>
                        <div className='flex justify-center w-[919px]'>
                            <Image src={CV} alt='cv' />
                        </div>
                    </div>
                    <div className='flex justify-center mb-[50px] '>
                        <Link href="https://www.cake.me/pdf/s--W1_u4iQFTH3vK0PAaUcZsQ--/oDE015.pdf" target='_blank'>
                            <span className='text-white bg-black p-2 px-4 rounded-full hover:text-black hover:bg-white hover:border-2 transition-all duration-500 antialiased text-lg'>
                                Download Resume
                            </span>
                        </Link>
                    </div>
                </main>
            </Layout>
        </>
    )
}
