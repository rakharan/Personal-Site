import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { projectList } from '@/data/projects'

export default function MainContent() {
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
            {projectList.map((project) => {
                return (
                    <article
                        key={project.title}
                        className='group border border-neutral-200/90 rounded-xl overflow-hidden bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col relative'
                    >
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='block flex flex-col h-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500 focus-visible:outline-offset-2'
                            aria-label={`Open ${project.title} project`}
                        >
                            <div className='relative w-full aspect-[16/9] overflow-hidden bg-neutral-100 border-b border-neutral-200/60'>
                                {project.img ? (
                                    <Image
                                        placeholder='blur'
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        src={project.img}
                                        alt={`${project.title} project preview`}
                                        className='object-cover object-top transition-transform duration-300 group-hover:scale-105'
                                    />
                                ) : (
                                    /* ponytail: fallback cover until screenshots added. replace with real image in src/data/projects.ts */
                                    <div className='w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
                                        <div className='flex flex-col items-center gap-1 opacity-80'>
                                            <span className='font-mono text-2xl font-bold tracking-tight text-white/90'>
                                                {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
                                            </span>
                                            <span className='font-mono text-[10px] tracking-widest uppercase text-neutral-400'>
                                                {project.techStacks[0]}
                                            </span>
                                        </div>
                                    </div>
                                )}
                                <span className='absolute left-3 top-3 bg-black/80 backdrop-blur-sm px-2.5 py-0.5 text-white font-mono text-xs font-medium rounded shadow-sm'>
                                    {project.year}
                                </span>
                            </div>

                            <div className='p-5 flex flex-col flex-grow'>
                                <div className='flex items-center justify-between mb-1.5 pr-8'>
                                    <h3 className='font-bold text-lg md:text-xl text-neutral-900 group-hover:underline'>
                                        {project.title}
                                    </h3>
                                </div>
                                <p className='text-xs md:text-sm text-neutral-600 mb-4 line-clamp-2 leading-relaxed'>
                                    {project.desc}
                                </p>
                                <div className='tech-stack flex gap-1.5 mt-auto items-center flex-wrap'>
                                    {project.techStacks.map((stack) => (
                                        <span
                                            key={stack}
                                            className='bg-neutral-100 text-neutral-700 font-mono border border-neutral-200 px-2 py-0.5 text-[11px] md:text-xs rounded'
                                        >
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                            className='absolute right-3 top-3 z-10 rounded-full bg-white/90 backdrop-blur-sm p-1.5 text-neutral-700 hover:text-black hover:bg-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500'
                        >
                            <AiOutlineGithub className='w-5 h-5' />
                        </a>
                    </article>
                )
            })}
        </div>
    )
}
