import React from 'react'
import cv from "/public/CV.png"
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
                            <Image src={cv} alt='cv' />
                        </div>
                    </div>
                    <div className='flex justify-center mb-[50px] '>
                        <Link href="https://docs.google.com/document/d/1mol7fB3q9v5ncAGM6a5VjeMcFi0eFMDo/edit?usp=share_link&ouid=109879742821620154344&rtpof=true&sd=true" target='_blank'>
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
