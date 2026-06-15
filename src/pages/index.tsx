import Layout from '@/components/Layout'
import Head from 'next/head'
import SocialLinks from '@/components/SocialLinks'
import dynamic from 'next/dynamic'

const MainContent = dynamic(() => import('../components/MainContent'))
const Home = () => {
  return (
    <Layout title='Home | Rakha Randhikatama'>
        <Head>

          <meta name="description" content="Personal Site of Rakha Randhikatama, a passionate junior back end developer." />

          <meta property="og:url" content="https://sagameda.com" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Personal Site of Rakha Randhikatama, a passionate junior back end developer." />
          <meta property="og:image" content="https://sagameda.com/thumbnail.webp" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="sagameda.com" />
          <meta property="twitter:url" content="https://sagameda.com" />
          <meta name="twitter:title" content="Home | Rakha Randhikatama" />
          <meta name="twitter:description" content="Personal Site of Rakha Randhikatama, a passionate junior back end developer." />
          <meta name="twitter:image" content="https://sagameda.com/thumbnail.webp" />

        </Head>
        <main className='min-h-screen'>
          <div className='mb-[200px] md:mb-[300px]' data-aos="fade-in" data-aos-easing="ease-in-out">
            <div className='introduction flex flex-col justify-center  items-center'>
              <div className='name flex justify-center items-center mt-[74px] md:text-[58px] md:leading-[75px] text-4xl' >
                <h1>Rakha
                  <br /> Randhikatama
                </h1>
              </div>
              <div className='short-brief w-[300px] md:w-[400px] flex justify-center mt-11 mb-[66px] px-4'>
                <p className='text-base leading-[26px] text-center italic md:text-xl font-black'>
                  Hello there! <br />
                  I am a Back-End developer, <br />
                  amateur photographer, and a stargazer. <br />
                  Two years building and maintaining backend systems, <br />
                  now also handling DevOps and infrastructure.
                </p>
              </div>
              <SocialLinks />
            </div>
          </div>
          <div className='portfolio-section min-h-screen w-full px-[30px] lg:px-[10vw] mt-[60px] lg:mt-[80px] mb-10' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className='portfolio-header text-center lg:text-left mb-14'>
              <h2 className='opacity-50 font-semibold tracking-[.5em] text-lg' >SELECTED PROJECTS</h2>
              <h2 className='font-bold text-3xl lg:text-[40px]'>THESE ARE MY FAVOURITE PROJECTS</h2>
            </div>
            <MainContent />
          </div>
        </main>
      </Layout>
  )
}

export default Home
