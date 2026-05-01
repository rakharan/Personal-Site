import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode
    title: string
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div >
    )
}
