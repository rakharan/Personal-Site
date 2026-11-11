import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
    title: string
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="alternate" type="application/rss+xml" title="Rakha Randhikatama — Blog" href="https://sagameda.com/rss.xml" />
            </Head>
            <a href='#main' className='skip-link'>Skip to content</a>
            <Navbar />
            {children}
            <Footer />
        </div >
    )
}
