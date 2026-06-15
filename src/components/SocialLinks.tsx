import Link from 'next/link'
import { RxInstagramLogo, RxLinkedinLogo, RxEnvelopeClosed } from "react-icons/rx"
import { AiOutlineMedium, AiOutlineGithub } from "react-icons/ai"

const allLinks = {
  instagram: { href: "https://www.instagram.com/rakharan/", label: "Rakha's Instagram", icon: RxInstagramLogo },
  linkedin: { href: "https://www.linkedin.com/in/rakha-randhikatama/", label: "Rakha's LinkedIn", icon: RxLinkedinLogo },
  email: { href: "mailto:randhikatamar@gmail.com", label: "Rakha's email", icon: RxEnvelopeClosed },
  medium: { href: "https://medium.com/@randhikatamar", label: "Rakha's Medium", icon: AiOutlineMedium },
  github: { href: "https://github.com/rakharan", label: "Rakha's GitHub", icon: AiOutlineGithub },
}

type LinkKey = keyof typeof allLinks

export default function SocialLinks({ links }: { links?: LinkKey[] }) {
  const keys = links ?? (Object.keys(allLinks) as LinkKey[])
  return (
    <div className='flex gap-x-5'>
      {keys.map(key => {
        const { href, label, icon: Icon } = allLinks[key]
        return (
          <Link key={key} aria-label={label} href={href} target="_blank" rel="noopener noreferrer"
            className='hover:bg-blue-300 rounded-full flex justify-center items-center p-1 transition-all duration-200'>
            <Icon size="1.5em" />
          </Link>
        )
      })}
    </div>
  )
}
