import { StaticImageData } from 'next/image'
import topupstore from "@/assets/projects/topupstore.webp"
import waysbeans from "@/assets/projects/waysbeans.webp"
import tokopaedi from "@/assets/projects/tokopaedi.webp"

export interface Project {
    title: string;
    year: number;
    img: StaticImageData;
    desc: string;
    href: string;
    github: string;
    techStacks: Array<string>
}

export const projectList: Array<Project> = [
    {
        title: 'Waysbeans',
        img: waysbeans,
        year: 2023,
        href: 'https://waysbeans-teal.vercel.app',
        github: 'https://github.com/rakharan/Waysbeans',
        desc: 'An online coffee shop for coffee addicts all around the world.',
        techStacks: ['React JS', 'Tailwind CSS', 'Go', 'PostgreSQL']
    },
    {
        title: 'TopUp Store',
        img: topupstore,
        year: 2026,
        href: 'https://sagameda.com',
        github: 'https://github.com/rakharan/topup-store',
        desc: 'Game top-up platform with WhatsApp ordering, QRIS payments, and instant digital delivery.',
        techStacks: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS']
    },
    {
        title: 'Tokopaedi',
        img: tokopaedi,
        year: 2024,
        href: 'https://github.com/RakhaTF/Tokopaedi',
        github: 'https://github.com/rakharan/Tokopaedi',
        desc: 'An E-commerce API integrated with midtrans and rajaongkir.',
        techStacks: ['Fastify', 'MySQL', 'Docker', 'TypeOrm', 'Typescript']
    },
]
