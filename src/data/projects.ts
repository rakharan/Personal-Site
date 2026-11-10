import { StaticImageData } from 'next/image'
import topupstore from "@/assets/projects/topupstore.webp"
import waysbeans from "@/assets/projects/waysbeans.webp"
import tokopaedi from "@/assets/projects/tokopaedi.webp"
import localCodebaseAi from "@/assets/projects/local-codebase-ai.webp"
import tokopaediMicroservices from "@/assets/projects/tokopaedi-microservices.webp"

export interface Project {
    title: string;
    year: number;
    img?: StaticImageData;
    desc: string;
    href: string;
    github: string;
    techStacks: Array<string>
}

export const projectList: Array<Project> = [
    {
        title: 'Local Codebase AI',
        img: localCodebaseAi,
        year: 2026,
        href: 'https://github.com/rakharan/local-codebase-ai',
        github: 'https://github.com/rakharan/local-codebase-ai',
        desc: 'Local-first RAG engine with hybrid search, neural reranker, self-learning loop, and MCP server.',
        techStacks: ['TypeScript', 'Qdrant', 'Ollama', 'Express', 'MCP']
    },
    {
        title: 'TopUp Store',
        img: topupstore,
        year: 2026,
        href: 'https://github.com/rakharan/topup-store',
        github: 'https://github.com/rakharan/topup-store',
        desc: 'Game top-up platform with WhatsApp notifications, QRIS payments, and instant digital delivery.',
        techStacks: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS', 'Node.js', 'Midtrans']
    },
    {
        title: 'Tokopaedi Microservices',
        img: tokopaediMicroservices,
        year: 2025,
        href: 'https://github.com/rakharan/tokopaedi-microservices',
        github: 'https://github.com/rakharan/tokopaedi-microservices',
        desc: 'Event-driven e-commerce split into 7 microservices with API gateway and async message brokers.',
        techStacks: ['TypeScript', 'RabbitMQ', 'Redis', 'Docker', 'pnpm']
    },
    {
        title: 'Tokopaedi',
        img: tokopaedi,
        year: 2024,
        href: 'https://github.com/rakharan/Tokopaedi',
        github: 'https://github.com/rakharan/Tokopaedi',
        desc: 'An E-commerce API integrated with midtrans and rajaongkir.',
        techStacks: ['Fastify', 'MySQL', 'Docker', 'TypeOrm', 'TypeScript', 'Redis', 'Midtrans', 'RajaOngkir']
    },
    {
        title: 'Waysbeans',
        img: waysbeans,
        year: 2023,
        href: 'https://waysbeans-teal.vercel.app',
        github: 'https://github.com/rakharan/Waysbeans',
        desc: 'An online coffee shop for coffee addicts all around the world.',
        techStacks: ['React JS', 'Tailwind CSS', 'Go', 'PostgreSQL', 'Echo', 'GORM', 'Midtrans']
    },
]
