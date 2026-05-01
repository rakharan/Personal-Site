import Layout from '@/components/layout'
import Link from 'next/link'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

interface PostPageProps {
  post: {
    slug: string
    title: string
    date: string
    description: string
    content: string
  } | null
}

export default function PostPage({ post }: PostPageProps) {
  if (!post) {
    return (
      <Layout title='Post Not Found | Rakha Randhikatama'>
        <main className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold mb-4'>Post Not Found</h1>
            <Link href='/blog' className='text-blue-600 hover:underline'>
              ← Back to blog
            </Link>
          </div>
        </main>
      </Layout>
    )
  }

  return (
    <Layout title={`${post.title} | Rakha Randhikatama`}>
      <main className='min-h-screen px-[30px] lg:px-[10vw] py-10 max-w-3xl mx-auto'>
        <Link href='/blog' className='text-sm opacity-50 hover:opacity-100 transition-opacity mb-8 inline-block'>
          ← Back to blog
        </Link>
        <article data-aos="fade-up">
          <time className='text-sm opacity-50'>{post.date}</time>
          <h1 className='font-bold text-4xl lg:text-5xl mt-2 mb-4'>{post.title}</h1>
          <p className='text-lg opacity-70 mb-8'>{post.description}</p>
          <div className='prose prose-lg max-w-none'>
            <MDXRemote {...JSON.parse(post.content)} />
          </div>
        </article>
      </main>
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
    return { props: { post: null } }
  }

  const mdxSource = await serialize(post.content)

  return {
    props: {
      post: {
        ...post,
        content: JSON.stringify(mdxSource),
      },
    },
  }
}
