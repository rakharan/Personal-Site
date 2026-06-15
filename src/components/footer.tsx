import { useState, useEffect } from 'react'
import SocialLinks from './SocialLinks'

export default function Footer() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'Asia/Jakarta'
            }).format(new Date()));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className='w-full flex justify-center  items-center px-10 md:px-20 lg:px-24'>
            <div className='footer-content w-full border-t-4 py-8 items-center font-bold text-lg flex flex-col md:flex-row md:justify-between '>
                <div className='left-content flex gap-x-14 justify-center'>
                    <div className='location flex flex-col gap-y-2'>
                        <p className='opacity-50 font-semibold'>Location</p>
                        <p className='font-bold text-lg'>Indonesia</p>
                    </div>
                    <div className='local-time flex flex-col gap-y-2'>
                        <p className='opacity-50 font-semibold'>Local Time</p>
                        <p className='font-bold text-lg' suppressHydrationWarning>{currentTime}</p>
                    </div>
                </div>

                <div className='right-content flex flex-col justify-center text-center mt-8 md:mt-0 gap-y-2 items-center'>
                    <p className='opacity-50 font-semibold'>Let&apos;s Connect</p>
                    <SocialLinks links={['linkedin', 'github', 'instagram']} />
                </div>
            </div>
        </footer>
    )
}
