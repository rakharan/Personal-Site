import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import { useState, useEffect } from 'react'

interface PostPageProps {
  post: {
    slug: string
    title: string
    date: string
    description: string
    content: string
    readingTime: string
    coverImage?: string
  } | null
  prevPost: { slug: string; title: string } | null
  nextPost: { slug: string; title: string } | null
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label='Scroll to top'
      className='fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500'
    >
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
      </svg>
    </button>
  )
}

export default function PostPage({ post, prevPost, nextPost }: PostPageProps) {
  if (!post) {
    return (
      <Layout title='Post Not Found | Rakha Randhikatama'>
        <main className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold mb-4'>Post Not Found</h1>
            <Link href='/blog' className='text-blue-600 hover:underline'>
              &lt;- Back to blog
            </Link>
          </div>
        </main>
      </Layout>
    )
  }

  return (
    <Layout title={`${post.title} | Rakha Randhikatama`}>
      <Head>
        {post.coverImage && <meta property='og:image' content={post.coverImage} />}
        <meta property='og:title' content={`${post.title} | Rakha Randhikatama`} />
        <meta property='og:description' content={post.description} />
      </Head>
      <main className='min-h-screen px-[30px] lg:px-[10vw] py-10'>
        <Link href='/blog' className='text-sm opacity-50 hover:opacity-100 transition-opacity mb-8 inline-block'>
          &lt;- Back to blog
        </Link>
        <article data-aos='fade-up'>
          {post.coverImage && (
            <div className='relative w-full h-56 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8'>
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                fill
                className='object-cover'
                sizes='100vw'
                priority
              />
            </div>
          )}
          <div className='flex items-center gap-x-3 text-sm opacity-50 mb-2'>
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className='font-bold text-4xl lg:text-5xl mt-2 mb-4'>{post.title}</h1>
          <p className='text-lg opacity-70 mb-8'>{post.description}</p>
          <div className='prose prose-lg max-w-none'>
            <MDXRemote {...JSON.parse(post.content)} />
          </div>
        </article>

        {/* Prev / Next navigation */}
        <nav className='mt-16 border-t pt-8 flex justify-between gap-4'>
          <div className='flex-1'>
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className='group flex flex-col gap-y-1'>
                <span className='text-sm opacity-50'>&lt;- Previous</span>
                <span className='font-semibold group-hover:underline'>{prevPost.title}</span>
              </Link>
            )}
          </div>
          <div className='flex-1 text-right'>
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className='group flex flex-col gap-y-1 items-end'>
                <span className='text-sm opacity-50'>Next -&gt;</span>
                <span className='font-semibold group-hover:underline'>{nextPost.title}</span>
              </Link>
            )}
          </div>
        </nav>
      </main>
      <ScrollToTop />
    </Layout>
  )
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs()
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return { props: { post: null, prevPost: null, nextPost: null } }
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === params.slug)
  const prevPost = currentIndex < allPosts.length - 1
    ? { slug: allPosts[currentIndex + 1].slug, title: allPosts[currentIndex + 1].title }
    : null
  const nextPost = currentIndex > 0
    ? { slug: allPosts[currentIndex - 1].slug, title: allPosts[currentIndex - 1].title }
    : null

  return {
    props: {
      post: {
        ...post,
        content: JSON.stringify(mdxSource),
        readingTime: allPosts[currentIndex].readingTime,
      },
      prevPost,
      nextPost,
    },
  }
}
