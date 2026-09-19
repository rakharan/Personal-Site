import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import { Fullscreen, Zoom, Slideshow, Thumbnails, Counter, Captions } from 'yet-another-react-lightbox/plugins'
import { photos } from '@/data/photos'

export { photos }

export default function Photography() {
  const [index, setIndex] = useState(-1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only gate to avoid hydration mismatch with featured hero image
    setMounted(true)
  }, [])

  const featured = photos.find(p => p.title === 'Cold Fire') ?? photos[0]
  const featuredIdx = photos.findIndex(p => p.src === featured.src)
  const gallery = photos.filter(p => p.src !== featured.src)

  // Hi-res variants for hero + lightbox
  const heroSrc = featured.src.replace('w=600', 'w=1600')
  const fullSlides = photos.map(p => ({
    src: p.src.replace('w=600', 'w=1200'),
    alt: p.alt,
    title: p.title,
    description: p.location,
  }))

  // Generate responsive srcset for a gallery photo
  function srcset(src: string): string {
    return [300, 600, 900].map(w => `${src.replace(/w=\d+/, `w=${w}`)} ${w}w`).join(', ')
  }

  return (
    <Layout title='Photography | Rakha Randhikatama'>
      <Head>
        <meta name="description" content="Photography gallery by Rakha Randhikatama — landscapes, astrophotography, and street scenes across Indonesia." />
        <meta property="og:title" content="Photography | Rakha Randhikatama" />
        <meta property="og:description" content="Photography gallery by Rakha Randhikatama — landscapes, astrophotography, and street scenes across Indonesia." />
        <meta property="og:url" content="https://sagameda.com/photography" />
        <meta property="og:image" content={heroSrc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={heroSrc} />
      </Head>

      <main className='min-h-screen'>
        {/* Hero — featured stargazing shot */}
        <section
          className='relative w-full h-[60vh] min-h-[400px] overflow-hidden flex items-end cursor-pointer'
          onClick={() => setIndex(featuredIdx)}
          role="button"
          tabIndex={0}
          aria-label={`Open featured photo: ${featured.title}`}
          onKeyDown={(e) => { if (e.key === 'Enter') setIndex(featuredIdx) }}
        >
          {mounted ? (
            <Image
              src={heroSrc}
              alt={featured.alt}
              fill
              priority
              sizes="100vw"
              className='absolute inset-0 w-full h-full object-cover'
            />
          ) : (
            <div
              className='absolute inset-0 bg-black/10'
              style={{ aspectRatio: `${featured.width}/${featured.height}` }}
            />
          )}

          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />

          <div className='relative px-[30px] lg:px-[10vw] pb-10 text-white'>
            <p className='opacity-80 font-semibold tracking-[.5em] text-sm mb-2'>FEATURED</p>
            <h1 className='font-bold text-4xl lg:text-6xl'>{featured.title}</h1>
            <p className='mt-1 text-sm opacity-80'>{featured.location}</p>
          </div>
        </section>

        {/* Gallery — CSS columns masonry with hover overlays */}
        <section className='px-[30px] lg:px-[10vw] py-12'>
          <div className='mb-8' data-aos="fade-up">
            <p className='opacity-50 font-semibold tracking-[.5em] text-lg'>GALLERY</p>
            <h2 className='font-bold text-2xl lg:text-[32px]'>ALL PHOTOGRAPHS</h2>
          </div>
          <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4'>
            {gallery.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setIndex(photos.findIndex(p => p.src === photo.src))}
                className='group relative block w-full overflow-hidden rounded-lg break-inside-avoid focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500'
                aria-label={`Open photo: ${photo.title}, ${photo.location}`}
                data-aos="fade-up"
                data-aos-delay={String((i % 3) * 80)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- unoptimized external URLs, native lazy-load + srcset sufficient */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading='lazy'
                  width={photo.width}
                  height={photo.height}
                  srcSet={srcset(photo.src)}
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='w-full h-auto block bg-black/5 transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                  <div className='text-white text-left'>
                    <p className='font-bold text-lg'>{photo.title}</p>
                    <p className='text-sm opacity-80'>{photo.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Lightbox
        index={index}
        slides={fullSlides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Zoom, Slideshow, Thumbnails, Counter]}
      />
    </Layout>
  )
}
