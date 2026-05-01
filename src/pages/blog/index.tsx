import Layout from '@/components/layout'
import Link from 'next/link'
import { getAllPosts, PostMeta } from '@/lib/blog'

interface BlogIndexProps {
  posts: PostMeta[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <Layout title='Blog | Rakha Randhikatama'>
      <main className='min-h-screen px-[30px] lg:px-[10vw] py-10'>
        <div className='mb-14 text-center lg:text-left' data-aos="fade-up">
          <h1 className='opacity-50 font-semibold tracking-[.5em] text-lg'>WRITINGS</h1>
          <h1 className='font-bold text-3xl lg:text-[40px]'>BLOG</h1>
        </div>
        {posts.length === 0 ? (
          <div className='text-center py-20' data-aos="fade-up">
            <p className='text-xl opacity-60'>No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className='block group'
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <article className='border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col'>
                  <time className='text-sm opacity-50 mb-2'>{post.date}</time>
                  <h2 className='font-bold text-xl mb-2 group-hover:underline'>{post.title}</h2>
                  <p className='opacity-70 flex-grow'>{post.description}</p>
                  <span className='mt-4 text-sm font-semibold opacity-50 group-hover:opacity-100 transition-opacity'>
                    Read more →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
