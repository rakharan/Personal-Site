import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { projectList } from '@/data/projects'

export default function MainContent() {
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
            {projectList.map((project) => {
                return (
                    <article key={project.title} className='group shadow-2xl relative rounded-xl overflow-hidden md:h-[22vw] h-[260px] bg-black'>
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='block h-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500 focus-visible:outline-offset-4'
                            aria-label={`Open ${project.title} project`}
                        >
                            <Image
                                placeholder='blur'
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                src={project.img}
                                alt={`${project.title} project preview`}
                                className='object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105'
                            />
                            <div className='absolute inset-0 bg-white/80 p-4 transition-colors duration-300 group-hover:bg-white/70 group-focus-visible:bg-white/70'>
                                <span className='absolute left-4 top-4 bg-black p-2 text-white text-base md:text-xl font-semibold rounded-md'>{project.year}</span>
                                <div className='flex h-full flex-col items-center justify-center text-center gap-y-3 px-2 pt-10'>
                                    <h3 className='font-bold text-2xl lg:text-4xl'>{project.title}</h3>
                                    <p className='text-base md:text-xl lg:text-2xl'>{project.desc}</p>
                                    <div className='tech-stack flex justify-center gap-x-2 mt-2 gap-y-2 items-center flex-wrap'>
                                        {project.techStacks.map((stack) => {
                                            return (
                                                <span key={stack} className='bg-black p-2 text-white text-xs rounded-md md:text-base'>{stack}</span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                            className='absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500'
                        >
                            <AiOutlineGithub className='w-6 h-6 lg:w-8 lg:h-8' />
                        </a>
                    </article>
                )
            })}
        </div>
    )
}
