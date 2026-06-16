import Layout from '@/components/Layout'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Fullscreen, Zoom, Slideshow, Thumbnails, Counter } from 'yet-another-react-lightbox/plugins'
import { photos } from '@/data/photos'

export { photos }

export default function Photography() {
  const [index, setIndex] = useState(-1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Layout title='Photography | Rakha Randhikatama'>
      <Head>
        <meta name="description" content="Photography gallery by Rakha Randhikatama" />
        <meta property="og:title" content="Photography | Rakha Randhikatama" />
        <meta property="og:description" content="Photography gallery by Rakha Randhikatama" />
        <meta property="og:url" content="https://sagameda.com/photography" />
        <meta property="og:image" content="https://sagameda.com/thumbnail.webp" />
      </Head>
      <main className='min-h-screen px-[30px] lg:px-[10vw] py-10'>
        <div className='mb-10 text-center lg:text-left' data-aos="fade-up">
          <p className='opacity-50 font-semibold tracking-[.5em] text-lg'>GALLERY</p>
          <h1 className='font-bold text-3xl lg:text-[40px]'>PHOTOGRAPHY</h1>
        </div>
        {mounted && (
          <PhotoAlbum
            photos={photos}
            layout="masonry"
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1
              if (containerWidth < 1024) return 2
              return 3
            }}
            spacing={16}
            onClick={({ index }) => setIndex(index)}
          />
        )}
        <Lightbox
          index={index}
          slides={photos.map(p => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom, Slideshow, Thumbnails, Counter]}
        />
      </main>
    </Layout>
  )
}
