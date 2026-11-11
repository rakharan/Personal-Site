import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getAllTags, getPostsByTag, PostMeta } from '@/lib/blog'
import { slugifyTag } from '@/lib/tags'

interface TagPageProps {
  tag: string
  posts: PostMeta[]
  tags: string[]
}

export default function TagPage({ tag, posts, tags }: TagPageProps) {
  const canonical = `https://sagameda.com/blog/tag/${slugifyTag(tag)}`
  return (
    <Layout title={`#${tag} | Blog | Rakha Randhikatama`}>
      <Head>
        <meta name="description" content={`Blog posts tagged "${tag}" by Rakha Randhikatama.`} />
        <meta property="og:title" content={`#${tag} | Blog | Rakha Randhikatama`} />
        <meta property="og:description" content={`Blog posts tagged "${tag}" by Rakha Randhikatama.`} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rakha Randhikatama" />
        <meta property="og:image" content="https://sagameda.com/thumbnail.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`#${tag} | Blog | Rakha Randhikatama`} />
        <meta name="twitter:description" content={`Blog posts tagged "${tag}" by Rakha Randhikatama.`} />
        <meta name="twitter:image" content="https://sagameda.com/thumbnail.webp" />
        <link rel="canonical" href={canonical} />
      </Head>
      <main id='main' className='min-h-screen px-[30px] lg:px-[10vw] py-10'>
        <Link href='/blog' className='text-sm opacity-50 hover:opacity-100 transition-opacity mb-8 inline-block'>
          &lt;- Back to blog
        </Link>
        <div className='mb-14 text-center lg:text-left' data-aos="fade-up">
          <p className='opacity-50 font-semibold tracking-[.5em] text-lg'>TAGGED</p>
          <h1 className='font-bold text-3xl lg:text-[40px]'>#{tag}</h1>
        </div>
        {tags.length > 0 && (
          <nav aria-label='All tags' className='mb-10 flex flex-wrap gap-2 justify-center lg:justify-start'>
            {tags.map(t => (
              <Link
                key={t}
                href={`/blog/tag/${slugifyTag(t)}`}
                aria-current={slugifyTag(t) === slugifyTag(tag) ? 'page' : undefined}
                className={`font-mono border px-3 py-1 text-sm rounded transition-colors ${slugifyTag(t) === slugifyTag(tag)
                  ? 'bg-black text-white border-black'
                  : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200'
                  }`}
              >
                #{t}
              </Link>
            ))}
          </nav>
        )}
        {posts.length === 0 ? (
          <div className='text-center py-20' data-aos="fade-up">
            <p className='text-xl opacity-60'>No posts with this tag yet.</p>
          </div>
        ) : (
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className='block group'
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
              >
                <article className='border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group-hover:scale-[1.02]'>
                  {post.coverImage ? (
                    <div className='relative w-full h-48'>
                      <Image
                        src={post.coverImage}
                        alt={`Cover image for ${post.title}`}
                        fill
                        className='object-cover'
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className='w-full h-48 bg-gradient-to-br from-black/10 to-black/5 flex items-center justify-center'>
                      <span className='text-4xl opacity-20 font-bold tracking-widest'>BLOG</span>
                    </div>
                  )}
                  <div className='p-6 flex flex-col flex-grow'>
                    <div className='flex items-center gap-x-2 text-sm opacity-50 mb-2'>
                      <time>{post.date}</time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className='font-bold text-xl mb-2 group-hover:underline'>{post.title}</h2>
                    <p className='opacity-70 flex-grow'>{post.description}</p>
                    <span className='mt-4 text-sm font-semibold opacity-50 group-hover:opacity-100 transition-opacity'>
                      Read more -&gt;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const tags = getAllTags()
  return {
    paths: tags.map(tag => ({ params: { tag: slugifyTag(tag) } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const posts = getAllPosts()
  return {
    props: {
      posts: getPostsByTag(params.tag),
      tags: getAllTags(),
      tag: posts.find(p => p.tags.some(t => slugifyTag(t) === params.tag))?.tags.find(t => slugifyTag(t) === params.tag) ?? params.tag,
    },
  }
}
