import Layout from '@/components/layout'
import Head from 'next/head'
import React from 'react'
import localFont from 'next/font/local'
const myFont = localFont({ src: './Avenir-Regular.woff2' })
import { RxInstagramLogo, RxLinkedinLogo, RxEnvelopeClosed, RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineMedium, AiOutlineGithub } from "react-icons/ai";
import Link from 'next/link'
// import MainContent from '@/components/mainContent'
import dynamic from 'next/dynamic'
const MainContent = dynamic(() => import('../components/mainContent'))
const Home = () => {
  return (
    <>
      <Layout title='Home | Rakha Randhikatama'>
        <Head>
          <meta name="description" content="Personal Site of Rakha Randhikatama, a paassionate junior front end developer." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className='min-h-screen'>
          <div className='mb-[200px] md:mb-[300px]'>
            <div className='introduction flex flex-col justify-center  items-center'>
              <div className='name flex justify-center items-center mt-[74px] md:text-[58px] md:leading-[75px] text-4xl'>
                <h1>Rakha
                  <br /> Randhikatama
                </h1>
              </div>
              <div className='short-brief w-[338px] md:w-[400px] flex justify-center mt-11 mb-[66px] px-4'>
                <p className={`${myFont.className} text-[13px] leading-[26px] text-center italic md:text-xl`}>
                  Hello there 👋 <br />
                  I am a Full-stack web developer <br />
                  currently focusing on the front-end development, <br />
                  amateur photographer and a stargazer <br />
                  I have no prior experience, but I look forward to working with you soon!
                </p>
              </div>
              <div className='social-media flex gap-x-9'>
                <div>
                  <Link href="https://www.instagram.com/rakharan/" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                    <RxInstagramLogo size={`1.5em`} />
                  </Link>
                </div>
                <div>
                  <Link href="https://www.linkedin.com/in/rakha-randhikatama/" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                    <RxLinkedinLogo size={`1.5em`} />
                  </Link>
                </div>
                <div>
                  <Link href="mailto:randhikatamar@gmail.com" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                    <RxEnvelopeClosed size={`1.5em`} />
                  </Link>
                </div>
                <div>
                  <Link href="https://medium.com/@randhikatamar" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                    <AiOutlineMedium size={`1.5em`} />
                  </Link>
                </div>
                <div>
                  <Link href="https://github.com/rakharan" target="_blank" className=' hover:bg-blue-300 rounded-full flex justify-center items-center p-[3px] transition-all duration-200'>
                    <AiOutlineGithub size={`1.5em`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='portfolio-section min-h-screen w-full px-[30px] lg:px-[10vw] mt-[60px] lg:mt-[80px] mb-10' data-aos="fade-up">
            <div className='portfolio-header text-center lg:text-left mb-14'>
              <h1 className='opacity-50 font-semibold tracking-[.5em] text-lg' >SELECTED PROJECTS</h1>
              <h1 className='font-bold text-3xl lg:text-[40px]'>THESE ARE MY FAVOURITE PROJECTS</h1>
            </div>
            <MainContent />
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Home