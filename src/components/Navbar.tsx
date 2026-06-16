import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
    const { pathname } = useRouter()
    const [mobileOpen, setMobileOpen] = useState(false)
    const links = [
        { href: '/blog', label: 'BLOG', active: pathname.startsWith('/blog') },
        { href: '/photography', label: 'PHOTOGRAPHY', active: pathname === '/photography' },
        { href: '/resume', label: 'RESUME', active: pathname === '/resume' },
    ]

    const homeActive = pathname === '/'

    return (
        <header>
                <nav className='px-5 md:px-14'>
                    <div className='h-[114px]  flex justify-between gap-x-5'>
                        <div className='left-navbar  flex items-center'>
                            <Link href="/" className={`text-2xl md:text-5xl border-t-4 transition-all duration-300 leading-[50px] ${homeActive ? 'border-black' : 'border-transparent hover:border-black'}`}>
                                R<span className='font-bold'>.</span>
                            </Link>
                        </div>
                        <div className='right-navbar hidden md:flex items-center'>
                            <ul className='flex gap-x-3 md:gap-x-[30px]'>
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            aria-current={link.active ? 'page' : undefined}
                                            className={`border-t-4 transition-all duration-300 p-2 leading-[50px] text-xs md:text-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500 ${link.active ? 'border-black' : 'border-transparent hover:border-black'}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={mobileOpen}
                                className='p-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500'
                            >
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    {mobileOpen ? (
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    ) : (
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    {mobileOpen && (
                        <div className='md:hidden border-t border-black/10 pb-4'>
                            <ul className='flex flex-col gap-y-2 pt-2'>
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            aria-current={link.active ? 'page' : undefined}
                                            className={`block py-2 px-4 text-lg transition-all duration-200 ${link.active ? 'font-bold bg-black/5' : 'hover:bg-black/5'}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
    )
}
