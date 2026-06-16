import Layout from '@/components/Layout'
import Head from 'next/head'
import SocialLinks from '@/components/SocialLinks'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getAllPosts, PostMeta } from '@/lib/blog'

const MainContent = dynamic(() => import('../components/MainContent'))

interface HomeProps {
  latestPosts: PostMeta[]
}

const Home = ({ latestPosts }: HomeProps) => {
  return (
    <Layout title='Home | Rakha Randhikatama'>
        <Head>
          <meta property="og:title" content="Home | Rakha Randhikatama" />
          <meta name="description" content="Personal site of Rakha Randhikatama — back-end developer, DevOps engineer, amateur photographer, and stargazer." />
          <meta property="og:url" content="https://sagameda.com" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Personal site of Rakha Randhikatama — back-end developer, DevOps engineer, amateur photographer, and stargazer." />
          <meta property="og:image" content="https://sagameda.com/thumbnail.webp" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="sagameda.com" />
          <meta property="twitter:url" content="https://sagameda.com" />
          <meta name="twitter:title" content="Home | Rakha Randhikatama" />
          <meta name="twitter:description" content="Personal site of Rakha Randhikatama — back-end developer, DevOps engineer, amateur photographer, and stargazer." />
          <meta name="twitter:image" content="https://sagameda.com/thumbnail.webp" />
        </Head>
        <main className='min-h-screen'>
          <div className='mb-[80px] md:mb-[120px]' data-aos="fade-in" data-aos-easing="ease-in-out">
            <div className='introduction flex flex-col justify-center items-center'>
              <div className='name flex justify-center items-center mt-[74px] md:text-[58px] md:leading-[75px] text-4xl'>
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

          {/* Projects section */}
          <div className='portfolio-section min-h-screen w-full px-[30px] lg:px-[10vw] mt-[60px] lg:mt-[80px] mb-10' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className='portfolio-header text-center lg:text-left mb-14'>
              <p className='opacity-50 font-semibold tracking-[.5em] text-lg'>SELECTED PROJECTS</p>
              <h2 className='font-bold text-3xl lg:text-[40px]'>THESE ARE MY FAVOURITE PROJECTS</h2>
            </div>
            <MainContent />
          </div>

          {/* Latest posts section */}
          {latestPosts.length > 0 && (
            <div className='w-full px-[30px] lg:px-[10vw] mt-[60px] mb-20' data-aos="fade-up" data-aos-easing="ease-in-out">
              <div className='text-center lg:text-left mb-14'>
                <p className='opacity-50 font-semibold tracking-[.5em] text-lg'>FROM THE BLOG</p>
                <h2 className='font-bold text-3xl lg:text-[40px]'>LATEST WRITINGS</h2>
              </div>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {latestPosts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className='block group'
                    data-aos="fade-up"
                    data-aos-delay={String(i * 100)}
                  >
                    <article className='border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group-hover:scale-[1.02] bg-white/50'>
                      <div className='p-6 flex flex-col flex-grow'>
                        <div className='flex items-center gap-x-2 text-sm opacity-50 mb-2'>
                          <time>{post.date}</time>
                          <span>·</span>
                          <span>{post.readingTime}</span>
                        </div>
                        <h3 className='font-bold text-xl mb-2 group-hover:underline'>{post.title}</h3>
                        <p className='opacity-70 flex-grow'>{post.description}</p>
                        <span className='mt-4 text-sm font-semibold opacity-50 group-hover:opacity-100 transition-opacity'>
                          Read more -&gt;
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              <div className='mt-10 text-center lg:text-left'>
                <Link href='/blog' className='inline-block border-b-2 border-black font-semibold hover:opacity-60 transition-opacity'>
                  View all posts -&gt;
                </Link>
              </div>
            </div>
          )}
        </main>
      </Layout>
  )
}

export async function getStaticProps() {
  const latestPosts = getAllPosts().slice(0, 3)
  return { props: { latestPosts } }
}

export default Home
