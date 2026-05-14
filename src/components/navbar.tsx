import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
    const { pathname } = useRouter()
    const links = [
        { href: '/blog', label: 'BLOG', active: pathname.startsWith('/blog') },
        { href: '/photography', label: 'PHOTOGRAPHY', active: pathname === '/photography' },
        { href: '/resume', label: 'RESUME', active: pathname === '/resume' },
    ]

    return (
        <header>
                <nav className='px-5 md:px-14'>
                    <div className='h-[114px]  flex justify-between gap-x-5'>
                        <div className='left-navbar  flex items-center'>
                            <Link href="/" className='text-2xl md:text-5xl'>
                                R<span className='font-bold'>.</span>
                            </Link>
                        </div>
                        <div className='right-navbar  flex items-center'>
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
                    </div>
                </nav>
            </header>
    )
}
