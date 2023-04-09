import Head from 'next/head'
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
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
