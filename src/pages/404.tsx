import Layout from '@/components/Layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout title='404 — Page Not Found | Rakha Randhikatama'>
      <main className='min-h-screen flex items-center justify-center px-[30px]'>
        <div className='text-center' data-aos='fade-up'>
          <p className='text-8xl font-bold opacity-10 mb-4'>404</p>
          <h1 className='text-3xl font-bold mb-4'>Page not found</h1>
          <p className='opacity-60 mb-8'>The page you are looking for does not exist or has been moved.</p>
          <Link
            href='/'
            className='inline-block border-b-2 border-black font-semibold hover:opacity-60 transition-opacity'
          >
            &lt;- Back to home
          </Link>
        </div>
      </main>
    </Layout>
  )
}
