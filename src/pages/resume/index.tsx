import CV from "@/assets/CV/CV.webp"
import Image from 'next/image'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
export default function Resume() {
    return (
        <Layout title='Resume | Rakha Randhikatama'>
                <Head>
                    <meta name="description" content="Resume of Rakha Randhikatama, back-end developer" />
                    <meta property="og:title" content="Resume | Rakha Randhikatama" />
                    <meta property="og:description" content="Resume of Rakha Randhikatama, back-end developer" />
                    <meta property="og:url" content="https://sagameda.com/resume" />
                    <meta property="og:image" content="https://sagameda.com/thumbnail.webp" />
                </Head>
                <main className='min-h-screen'>
                    <div className='px-4 md:px-10 lg:px-20 py-10'>
                        <h1 className='font-bold text-3xl lg:text-[40px] text-center mb-8'>Resume</h1>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <div className='flex justify-center w-full max-w-[919px] px-4'>
                            <Image src={CV} alt='Rakha Randhikatama resume preview - Back-end developer with experience in Go, TypeScript, Docker, and cloud infrastructure' />
                        </div>
                    </div>
                    <div className='flex justify-center mb-[50px] '>
                        <Link href="https://www.cake.me/pdf/s--W1_u4iQFTH3vK0PAaUcZsQ--/oDE015.pdf" target='_blank' rel="noopener noreferrer">
                            <span className='text-white bg-black border-2 border-black p-2 px-4 rounded-full hover:text-black hover:bg-white hover:border-black transition-all duration-500 antialiased text-lg'>
                                Download Resume
                            </span>
                        </Link>
                    </div>
                </main>
            </Layout>
    )
}
