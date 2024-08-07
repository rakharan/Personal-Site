import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import waysbeans from "/public/projects/waysbeans.webp"
import landtick from "/public/projects/landtick.webp"
import tokopaedi from "/public/projects/tokopaedi.webp"
import Link from 'next/link'

interface ProjectList {
    title: string;
    year: number;
    img: StaticImageData;
    desc: string;
    href: string;
    techStacks: Array<string>
}

const projectList: Array<ProjectList> = [
    {
        title: 'Waysbeans',
        img: waysbeans,
        year: 2023,
        href: 'https://waysbeans-teal.vercel.app',
        desc: 'An online coffee shop for coffee addicts all around the world.',
        techStacks: ['React JS', 'Tailwind CSS', 'Go', 'PostgreSQL']
    },
    {
        title: 'LandTick',
        img: landtick,
        year: 2023,
        href: 'https://final-task-pi.vercel.app/',
        desc: 'An online railway ticket booking application.',
        techStacks: ['React JS', 'Tailwind CSS', 'Go', 'PostgreSQL']
    },
    {
        title: 'Tokopaedi',
        img: tokopaedi,
        year: 2024,
        href: 'https://github.com/RakhaTF/Tokopaedi',
        desc: 'An E-commerce API integrated with midtrans and rajaongkir.',
        techStacks: ['Fastify', 'MySQL', 'Docker', 'TypeOrm', 'Typescript']
    },
]
export default function MainContent() {

    const [hoveredProjectIndex, setHoveredProjectIndex] = useState(-1);

    const handleMouseEnter = (index: number) => {
        setHoveredProjectIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredProjectIndex(-1);
    };

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
            {projectList?.map((project, index) => {
                const isHovered = hoveredProjectIndex === index;
                return (
                    <div key={index} className=' shadow-2xl relative rounded-xl overflow-hidden cursor-pointer md:h-[22vw] h-[220px]' onMouseEnter={() => {
                        handleMouseEnter(index);
                    }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                        }}>
                        <Link href={project.href} target="_blank">
                            <div className={`overlay absolute  w-full h-full p-4 ${isHovered ? `bg-transparent` : `bg-white/70`} transition-all duration-500`}>
                                <div className='project-year absolute'>
                                    <span className={`text-base md:text-xl font-semibold ${isHovered ? `bg-black p-2 text-white rounded-md` : `bg-white p-2 text-black rounded-md`}`}>{project.year}</span>
                                </div>
                                <div className='overlay-content flex justify-center items-center w-full h-full'>
                                    <div className={`project-detail flex flex-col justify-center items-center text-center lg:gap-y-4 ${isHovered ? `hidden` : ``}`}>
                                        <h1 className='font-bold text-2xl lg:text-4xl'>{project.title}</h1>
                                        <p className='text-base md:text-xl lg:text-2xl'>{project.desc}</p>
                                        <div className='tech-stack flex justify-center gap-x-2 mt-5 gap-y-2 items-center flex-wrap'>
                                            {project.techStacks.map((stack, index) => {
                                                return (
                                                    <span key={index} className='bg-black p-2 text-white text-xs rounded-md md:text-base'>{stack}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image placeholder='blur' width={1200} height={500} src={project.img} alt={project.title}/>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
